import { ProviderFactory } from '@atlaskit/editor-common/provider-factory';
import { EmojiDescription } from '@atlaskit/emoji/types';
import {
  doc,
  p,
  code,
  code_block,
  hardBreak,
  emoji,
  typeAheadQuery,
} from '@atlaskit/editor-test-helpers/schema-builder';
import { insertText } from '@atlaskit/editor-test-helpers/transactions';
import {
  Preset,
  createProsemirrorEditorFactory,
  LightEditorPlugin,
} from '@atlaskit/editor-test-helpers/create-prosemirror-editor';
import {
  CreateUIAnalyticsEvent,
  UIAnalyticsEvent,
} from '@atlaskit/analytics-next';
import { emoji as emojiData } from '@atlaskit/util-data-test';
import { EditorState } from 'prosemirror-state';

// Editor Plugins
import analyticsPlugin from '../../../analytics';
import emojiPlugin from '../../';
import basePlugin from '../../../base';
import typeAheadPlugin from '../../../type-ahead';
import blockTypePlugin from '../../../block-type';
import textFormattingPlugin from '../../../text-formatting';
import codeBlockPlugin from '../../../code-block';

const emojiProvider = emojiData.testData.getEmojiResourcePromise();
const providerFactory = ProviderFactory.create({ emojiProvider });

describe('ascii emojis - input rules', () => {
  const createEditor = createProsemirrorEditorFactory();

  let createAnalyticsEvent: CreateUIAnalyticsEvent;

  const editor = (doc: any) => {
    createAnalyticsEvent = jest.fn(() => ({ fire() {} } as UIAnalyticsEvent));
    return createEditor({
      doc,
      preset: new Preset<LightEditorPlugin>()
        .add([analyticsPlugin, { createAnalyticsEvent }])
        .add([
          emojiPlugin,
          { useInlineWrapper: false, allowZeroWidthSpaceAfter: true },
        ])
        .add(typeAheadPlugin)
        .add(blockTypePlugin)
        .add(codeBlockPlugin)
        .add(textFormattingPlugin)
        .add(basePlugin),
      providerFactory,
    });
  };

  const smileyEmoji = emoji({
    id: '1f603',
    shortName: ':smiley:',
    text: '😃',
  });
  const thumbsupEmoji = emoji({
    id: '1f44d',
    shortName: ':thumbsup:',
    text: '👍',
  });
  const sweatSmileEmoji = emoji({
    id: '1f605',
    shortName: ':sweat_smile:',
    text: '😅',
  });
  const starEmoji = emoji({
    id: 'atlassian-yellow_star',
    shortName: ':yellow_star:',
    text: ':yellow_star:',
  });

  const assert = (
    what: string,
    docContents: any,
    expectation: (state: EditorState) => void,
  ) => {
    const { editorView, sel } = editor(doc(docContents));
    insertText(editorView, what, sel);

    const { state } = editorView;
    expectation(state);
  };

  /**
   * Hack for emoji/ascii-input-rules plugin. It initializes `matchers` asynchronousely,
   * and uses a module level variable to store them.
   * Removing beforeAll will break any first `it` in this test suit.
   *
   * https://bitbucket.org/atlassian/atlaskit-mk-2/src/d3016172f2f26d74bd25b2489743ff9292cbd75b/packages/fabric/editor-core/src/plugins/emojis/ascii-input-rules.ts#ascii-input-rules.ts-9
   * https://bitbucket.org/atlassian/atlaskit-mk-2/src/d3016172f2f26d74bd25b2489743ff9292cbd75b/packages/fabric/editor-core/src/plugins/emojis/ascii-input-rules.ts#ascii-input-rules.ts-33:38
   * https://bitbucket.org/atlassian/atlaskit-mk-2/src/d3016172f2f26d74bd25b2489743ff9292cbd75b/packages/fabric/editor-core/src/plugins/emojis/ascii-input-rules.ts#ascii-input-rules.ts-49:51
   */
  beforeAll(() => {
    editor(doc(p('')));
  });

  describe('when an emoticon is preceded by a space character', () => {
    describe('and starting with a colon character', () => {
      it('should replace a matching emoticon when followed by a space', () => {
        return assert('text :D ', p('{<>}'), state => {
          expect(state.doc.content.child(0)).toEqualDocument(
            p('text ', smileyEmoji(), ' '),
          );
        });
      });

      it('should not replace a matching emoticon if not followed by a space', () => {
        return assert('text :D', p('{<>}'), state => {
          expect(state.doc.content.child(0)).toEqualDocument(
            p('text ', typeAheadQuery({ trigger: ':' })(':D')),
          );
        });
      });
    });

    describe('and not starting with a colon character', () => {
      it('should replace a matching emoticon', () => {
        return assert('text (y)', p('{<>}'), state => {
          expect(state.doc.content.child(0)).toEqualDocument(
            p('text ', thumbsupEmoji()),
          );
        });
      });

      it('should replace a matching emoticon even when containing a colon', () => {
        return assert(`text ':D`, p('{<>}'), state => {
          const e = emoji({
            id: '1f605',
            shortName: ':sweat_smile:',
            text: '😅',
          });
          expect(state.doc.content.child(0)).toEqualDocument(p('text ', e()));
        });
      });
    });

    describe('in unsupported content', () => {
      it('should not replace a matching emoticon in an unsupported node', () => {
        return assert('text :D ', code_block()('{<>}'), state => {
          expect(state.doc.content.child(0)).toEqualDocument(
            code_block()('text :D '),
          );
        });
      });

      it('should not replace an emoticon in an unsupported mark', () => {
        return assert(' :D ', p(code('code{<>}')), state => {
          expect(state.doc.content.child(0)).toEqualDocument(
            p(code('code :D ')),
          );
        });
      });
    });
  });

  describe('when preceded by a tab character', () => {
    it('should replace a matching emoticon', () => {
      return assert('\t(y)', p('{<>}'), state => {
        expect(state.doc.content.child(0)).toEqualDocument(
          p('\t', thumbsupEmoji()),
        );
      });
    });
  });

  describe('when starting at the beginning of a line', () => {
    describe('and starting with a colon character', () => {
      it('should replace a matching emoticon if followed by a space', () => {
        return assert(':D ', p('{<>}'), state => {
          expect(state.doc.content.child(0)).toEqualDocument(
            p(smileyEmoji(), ' '),
          );
        });
      });

      it('should not replace a matching emoticon if not followed by a space', () => {
        return assert(':D', p('{<>}'), state => {
          expect(state.doc.content.child(0)).toEqualDocument(
            p(typeAheadQuery({ trigger: ':' })(':D')),
          );
        });
      });
    });

    describe('and not starting with a colon character', () => {
      it('should replace a matching emoticon', () => {
        return assert('(y)', p('{<>}'), state => {
          expect(state.doc.content.child(0)).toEqualDocument(
            p(thumbsupEmoji()),
          );
        });
      });
    });
  });

  describe('when preceded by a hard break', () => {
    it('should replace a matching emoticon', () => {
      return assert('(y)', p(hardBreak(), '{<>}'), state => {
        expect(state.doc.content.child(0)).toEqualDocument(
          p(hardBreak(), thumbsupEmoji()),
        );
      });
    });
  });

  describe('when preceded by another emoji', () => {
    it('should replace a matching emoticon starting with a colon', () => {
      return assert(':D ', p(thumbsupEmoji(), '{<>}'), state => {
        expect(state.doc.content.child(0)).toEqualDocument(
          p(thumbsupEmoji(), smileyEmoji(), ' '),
        );
      });
    });

    it('should replace a matching emoticon not starting with a colon', () => {
      return assert('(y)', p(smileyEmoji(), '{<>}'), state => {
        expect(state.doc.content.child(0)).toEqualDocument(
          p(smileyEmoji(), thumbsupEmoji()),
        );
      });
    });
  });

  describe('when preceded by an opening round bracket', () => {
    it('should replace a matching emoticon starting with a colon', () => {
      return assert(':D ', p('({<>}'), state => {
        expect(state.doc.content.child(0)).toEqualDocument(
          p('(', smileyEmoji(), ' '),
        );
      });
    });

    it('should replace the thumbsup emoticon', () => {
      return assert('(y)', p('({<>}'), state => {
        expect(state.doc.content.child(0)).toEqualDocument(
          p('(', thumbsupEmoji()),
        );
      });
    });

    it('should replace a matching emoticon ending with a closing rounded bracket', () => {
      return assert("'=)", p('({<>}'), state => {
        expect(state.doc.content.child(0)).toEqualDocument(
          p('(', sweatSmileEmoji()),
        );
      });
    });

    it('should replace emoticon starting with an opening round bracket', () => {
      return assert('(*)', p('({<>}'), state => {
        expect(state.doc.content.child(0)).toEqualDocument(p('(', starEmoji()));
      });
    });
  });

  describe('when preceded by non-whitespace character', () => {
    it('should not replace a matching emoticon starting with a colon', () => {
      return assert('text:D ', p('{<>}'), state => {
        expect(state.doc.content.child(0)).toEqualDocument(p('text:D '));
      });
    });

    it('should not replace a matching emoticon not starting with a colon', () => {
      return assert('text(y)', p('{<>}'), state => {
        expect(state.doc.content.child(0)).toEqualDocument(p('text(y)'));
      });
    });
  });

  describe('recording emoji usage', () => {
    beforeEach(() => {
      return emojiProvider.then(provider => {
        provider.recordedSelections = [];
      });
    });

    afterEach(() => {
      return emojiProvider.then(provider => {
        provider.recordedSelections = [];
      });
    });

    it('it should record usage when an emoticon is matched', () => {
      return emojiProvider.then(async resource => {
        const { editorView, sel } = editor(doc(p('{<>}')));
        insertText(editorView, ':D ', sel);

        const selections: EmojiDescription[] = resource.recordedSelections;
        expect(selections.length).toBe(1);
        expect(selections[0].shortName).toEqual(':smiley:');
      });
    });
  });

  describe('analytics', () => {
    const analyticsPayload = {
      action: 'inserted',
      actionSubject: 'document',
      actionSubjectId: 'emoji',
      attributes: expect.objectContaining({ inputMethod: 'ascii' }),
      eventType: 'track',
    };

    it('should fire analytics event when emoji starting with colon is inserted', () => {
      const { editorView, sel } = editor(doc(p('{<>}')));
      insertText(editorView, ':D ', sel);

      expect(createAnalyticsEvent).toBeCalledWith(analyticsPayload);
    });
    it('should fire analytics event when emoji not starting with colon is inserted', () => {
      const { editorView, sel } = editor(doc(p('{<>}')));
      insertText(editorView, '(y)', sel);

      expect(createAnalyticsEvent).toBeCalledWith(analyticsPayload);
    });
  });
});
