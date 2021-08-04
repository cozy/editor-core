import React from 'react';
import { Node as PmNode } from 'prosemirror-model';
import { EditorView } from 'prosemirror-view';
import {
  calcBreakoutWidth,
  overflowShadow,
  OverflowShadowProps,
  ExtensionProvider,
} from '@atlaskit/editor-common';
import { Wrapper, Header, Content, ContentWrapper } from './styles';
import { Overlay } from '../styles';
import ExtensionLozenge from '../Lozenge';
import {
  pluginKey as widthPluginKey,
  WidthPluginState,
} from '../../../../width';
import WithPluginState from '../../../../../ui/WithPluginState';

export interface Props {
  node: PmNode;
  view: EditorView;
  extensionProvider?: ExtensionProvider;
  handleContentDOMRef: (node: HTMLElement | null) => void;
  children?: React.ReactNode;
}

const Extension = (props: Props & OverflowShadowProps) => {
  const {
    node,
    handleContentDOMRef,
    children,
    view,
    handleRef,
    shadowClassNames,
  } = props;

  const hasBody = node.type.name === 'bodiedExtension';
  const hasChildren = !!children;

  return (
    <WithPluginState
      editorView={view}
      plugins={{
        widthState: widthPluginKey,
      }}
      render={({
        widthState = { width: 0 },
      }: {
        widthState?: WidthPluginState;
      }) => {
        return (
          <Wrapper
            innerRef={handleRef}
            data-layout={node.attrs.layout}
            className={`extension-container ${shadowClassNames} ${
              hasBody ? '' : 'with-overlay'
            }`}
            style={{
              width: calcBreakoutWidth(node.attrs.layout, widthState.width),
            }}
          >
            <div
              className={`extension-overflow-wrapper ${
                hasBody ? 'with-body' : ''
              }`}
            >
              <Overlay className="extension-overlay" />
              <Header
                contentEditable={false}
                className={hasChildren ? 'with-children' : ''}
              >
                <ExtensionLozenge node={node} />
                {children}
              </Header>
              {hasBody && (
                <ContentWrapper>
                  <Content
                    innerRef={handleContentDOMRef}
                    className="extension-content"
                  />
                </ContentWrapper>
              )}
            </div>
          </Wrapper>
        );
      }}
    />
  );
};

export default overflowShadow(Extension, {
  overflowSelector: '.extension-overflow-wrapper',
});
