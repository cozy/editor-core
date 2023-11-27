jest.mock('raf-schd', () => (cb: Function) => {
  (cb as any).cancel = jest.fn();
  return cb;
});

import React from 'react';
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { mount, ReactWrapper } from 'enzyme';

import type { EmbedCardAttributes } from '@atlaskit/adf-schema';
import type { DispatchAnalyticsEvent } from '@atlaskit/editor-common/analytics';
import type { CardOptions } from '@atlaskit/editor-common/card';
import { MediaSingle as RichMediaWrapper } from '@atlaskit/editor-common/ui';
// eslint-disable-next-line @atlassian/tangerine/import/entry-points
import { setDragging } from '@atlaskit/editor-plugin-table/src/plugins/table/pm-plugins/table-resizing/commands';
// eslint-disable-next-line import/no-extraneous-dependencies -- Removed import for fixing circular dependencies
import { createEditorFactory } from '@atlaskit/editor-test-helpers/create-editor';
// eslint-disable-next-line import/no-extraneous-dependencies -- Removed import for fixing circular dependencies
import { doc, embedCard } from '@atlaskit/editor-test-helpers/doc-builder';
import type { DocBuilder } from '@atlaskit/editor-common/types';
import type { CardProps } from '@atlaskit/smart-card';
import { Card, EmbedResizeMessageListener } from '@atlaskit/smart-card';
import { IntlProvider } from 'react-intl-next';

// eslint-disable-next-line @atlassian/tangerine/import/entry-points
import type { EmbedCardState } from '@atlaskit/editor-plugin-card/src/nodeviews/embedCard';
// eslint-disable-next-line @atlassian/tangerine/import/entry-points
import { EmbedCardComponent } from '@atlaskit/editor-plugin-card/src/nodeviews/embedCard';
// eslint-disable-next-line @atlassian/tangerine/import/entry-points
import type { SmartCardProps } from '@atlaskit/editor-plugin-card/src/nodeviews/genericCard';
// eslint-disable-next-line @atlassian/tangerine/import/entry-points
import ResizableEmbedCard from '@atlaskit/editor-plugin-card/src/ui/ResizableEmbedCard';
// eslint-disable-next-line @atlassian/tangerine/import/entry-points
import { createCardContext } from '@atlaskit/editor-plugin-card/src/__tests__/unit/_helpers';
import { act } from 'react-dom/test-utils';

describe('EmbedCard', () => {
  const createEditor = createEditorFactory();
  let allowColumnResizing: boolean;

  let mockDispatchAnalytics: DispatchAnalyticsEvent;
  const editor = (doc: DocBuilder, cardProps?: Partial<CardOptions>) => {
    return createEditor({
      doc,
      editorProps: {
        allowTables: {
          advanced: true,
          allowColumnResizing,
        },
        smartLinks: {
          allowEmbeds: true,
          ...cardProps,
        },
      },
    });
  };

  const setup = (
    props?: Partial<SmartCardProps>,
    attributes?: Partial<EmbedCardAttributes>,
  ) => {
    const mockInlinePmNode = embedCard({
      url: 'https://some/url',
      layout: 'center',
      ...attributes,
    })();
    const { editorView } = editor(doc(mockInlinePmNode));
    const node = editorView.state.doc.firstChild;
    if (!node) {
      throw new Error('node should be defined');
    }

    const getPos = jest.fn(() => 0);
    const component = mount<EmbedCardComponent, SmartCardProps, EmbedCardState>(
      <IntlProvider locale="en">
        <EmbedCardComponent
          node={node}
          view={editorView}
          getPos={getPos}
          dispatchAnalyticsEvent={mockDispatchAnalytics}
          cardContext={createCardContext()}
          allowResizing={true}
          {...props}
        />
      </IntlProvider>,
    );
    const cardComponent = component.find(Card) as ReactWrapper<CardProps, any>;
    const resizeListener = component.find(EmbedResizeMessageListener);
    const resizableEmbedCard = component.find(ResizableEmbedCard);
    const richMediaWrapper = component.find(RichMediaWrapper);

    return {
      component,
      cardComponent,
      resizeListener,
      resizableEmbedCard,
      richMediaWrapper,
      getPos,
      editorView,
      node,
    };
  };

  beforeEach(() => {
    allowColumnResizing = true;
    mockDispatchAnalytics = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders', () => {
    const { component, cardComponent } = setup();

    expect(cardComponent).toHaveLength(1);
    expect(cardComponent.prop('url')).toBe('https://some/url');
    component.unmount();
  });

  it('should render EmbedResizeMessageListener', () => {
    const { resizeListener } = setup();

    expect(resizeListener).toHaveLength(1);
    const resizeListenerProps = resizeListener.props();
    expect(resizeListenerProps.onHeightUpdate).toEqual(expect.any(Function));
    expect(resizeListenerProps.embedIframeRef).toBeDefined();
  });

  it("should use originalHeight from ADF attributes if state hasn't been updated with current height", () => {
    const { resizableEmbedCard } = setup(
      {},
      {
        originalHeight: 42,
      },
    );
    const { height } = resizableEmbedCard.props();
    expect(height).toEqual(42);
  });

  it('should not define height when ADF has both dimensions', () => {
    const { resizableEmbedCard } = setup(
      {},
      {
        originalHeight: 100,
        originalWidth: 400,
      },
    );
    expect(resizableEmbedCard.props().height).toBeUndefined();
    expect(resizableEmbedCard.props().aspectRatio).toBe(400 / 100);
  });

  it('should use height sent via on onHeightUpdate', () => {
    const { component, resizeListener } = setup(
      {},
      {
        originalHeight: 42,
      },
    );

    expect(resizeListener).toHaveLength(1);
    const resizeListenerProps = resizeListener.props();
    act(() => {
      resizeListenerProps.onHeightUpdate(50);
    });
    component.update();
    const resizableEmbedCard = component.find(ResizableEmbedCard);
    expect(resizableEmbedCard.props().height).toEqual(50);
  });

  it('should set height to originalHeight ADF attribute on onHeightUpdate event', async () => {
    const { resizeListener, editorView } = setup();

    expect(resizeListener).toHaveLength(1);
    const resizeListenerProps = resizeListener.props();
    act(() => {
      resizeListenerProps.onHeightUpdate(50);
    });
    expect(editorView.state).toEqualDocumentAndSelection(
      doc(
        embedCard({
          url: 'https://some/url',
          layout: 'center',
          originalHeight: 50,
        })(),
      ),
    );
  });

  it('should set height to originalHeight ADF attribute on onHeightUpdate event when table resizing plugin is not present', async () => {
    allowColumnResizing = false;
    const { resizeListener, editorView } = setup();

    expect(resizeListener).toHaveLength(1);
    const resizeListenerProps = resizeListener.props();
    act(() => {
      resizeListenerProps.onHeightUpdate(50);
    });
    expect(editorView.state).toEqualDocumentAndSelection(
      doc(
        embedCard({
          url: 'https://some/url',
          layout: 'center',
          originalHeight: 50,
        })(),
      ),
    );
  });

  it('should not update originalHeight in ADF if table is being resized', () => {
    const { resizeListener, editorView } = setup();

    setDragging({
      startWidth: 42,
      startX: 35,
    })(editorView.state, editorView.dispatch);

    expect(resizeListener).toHaveLength(1);
    const resizeListenerProps = resizeListener.props();
    act(() => {
      resizeListenerProps.onHeightUpdate(50);
    });
    expect(editorView.state).toEqualDocumentAndSelection(
      doc(
        embedCard({
          url: 'https://some/url',
          layout: 'center',
          originalHeight: undefined,
        })(),
      ),
    );
  });

  describe('when allowResizing is false', () => {
    it('does not render resizer handles', () => {
      const { cardComponent, resizableEmbedCard } = setup({
        allowResizing: false,
      });

      expect(resizableEmbedCard).toHaveLength(0);
      expect(cardComponent).toHaveLength(1);
    });

    it('should render RichMediaWrapper', () => {
      const { richMediaWrapper } = setup(
        { allowResizing: false },
        {
          originalHeight: 42,
        },
      );

      expect(richMediaWrapper).toHaveLength(1);
      const richMediaWrapperProps = richMediaWrapper.props();
      expect(richMediaWrapperProps.containerWidth).toBeDefined();
      expect(richMediaWrapperProps.height).toEqual(42);
      expect(richMediaWrapperProps.width).toBeUndefined();
    });

    it('should put dimensions defined by data from ADF', () => {
      const { richMediaWrapper } = setup(
        { allowResizing: false },
        {
          originalHeight: 100,
          originalWidth: 400,
        },
      );

      const richMediaWrapperProps = richMediaWrapper.props();
      if (richMediaWrapperProps.width === undefined) {
        expect(richMediaWrapperProps.width).toBeDefined();
        return;
      }
      if (richMediaWrapperProps.height === undefined) {
        expect(richMediaWrapperProps.height).toBeDefined();
        return;
      }
      expect(
        richMediaWrapperProps.width / richMediaWrapperProps.height,
      ).toEqual(400 / 100);
    });

    it('should put default dimensions on RichMediaWrapper when there is no originalHeight nor state one', () => {
      const { richMediaWrapper } = setup({ allowResizing: false });

      const richMediaWrapperProps = richMediaWrapper.props();
      if (richMediaWrapperProps.width === undefined) {
        expect(richMediaWrapperProps.width).toBeDefined();
        return;
      }
      if (richMediaWrapperProps.height === undefined) {
        expect(richMediaWrapperProps.height).toBeDefined();
        return;
      }
      expect(
        richMediaWrapperProps.width / richMediaWrapperProps.height,
      ).toEqual(680 / 480);
    });

    it('should put height provided by onHeightChange on RichMediaWrapper', () => {
      const { resizeListener, component } = setup({ allowResizing: false });

      const resizeListenerProps = resizeListener.props();
      act(() => {
        resizeListenerProps.onHeightUpdate(50);
      });
      component.update();

      const richMediaWrapper = component.find(RichMediaWrapper);
      const richMediaWrapperProps = richMediaWrapper.props();
      expect(richMediaWrapperProps.height).toEqual(50);
      expect(richMediaWrapperProps.width).toBeUndefined();
    });

    it('should use aspectRatio on RichMediaWrapper when there it is provided', () => {
      const { cardComponent, component } = setup({ allowResizing: false });
      const { onResolve } = cardComponent.props();
      if (!onResolve) {
        expect(onResolve).toBeDefined();
        return;
      }
      act(() => {
        onResolve({
          url: 'some-url',
          title: 'some title',
          aspectRatio: 0.42,
        });
      });
      component.update();
      const richMediaWrapper = component.find(RichMediaWrapper);
      const richMediaWrapperProps = richMediaWrapper.props();
      expect(
        (richMediaWrapperProps.width || 0) / richMediaWrapperProps.height,
      ).toEqual(0.42 / 1);
    });

    it.each([new Error(), null, undefined])(
      'should only throw err when onError prop is called with an err value',
      (err) => {
        const { cardComponent } = setup();
        const { onError } = cardComponent.props();
        if (!onError) {
          throw new Error('Must have onError prop');
        }
        const onErrorPropCall = () =>
          onError({
            status: 'not_found',
            url: 'https://my.url.com',
            err,
          } as any);
        if (err) {
          expect(onErrorPropCall).toThrow(err as any);
        } else {
          expect(onErrorPropCall).not.toThrow();
        }
      },
    );
  });
});
