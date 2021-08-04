import {
  blockquote,
  br,
  code_block,
  doc,
  h1,
  h2,
  h3,
  p,
  indentation,
  code,
  hardBreak,
  a as link,
} from '@atlaskit/editor-test-helpers/schema-builder';
import sendKeyToPm from '@atlaskit/editor-test-helpers/send-key-to-pm';
import { insertText } from '@atlaskit/editor-test-helpers/transactions';
import {
  createProsemirrorEditorFactory,
  LightEditorPlugin,
  Preset,
} from '@atlaskit/editor-test-helpers/create-prosemirror-editor';
import {
  CreateUIAnalyticsEvent,
  UIAnalyticsEvent,
} from '@atlaskit/analytics-next';
import { HeadingLevels } from '../../types';
import { EditorView } from 'prosemirror-view';
import blockTypePlugin from '../../';
import analyticsPlugin from '../../../analytics';
import indentationPlugin from '../../../indentation';
import quickInsertPlugin from '../../../quick-insert';
import typeAheadPlugin from '../../../type-ahead';
import codeBlockPlugin from '../../../code-block';
import hyperlinkPlugin from '../../../hyperlink';
import textFormattingPlugin from '../../../text-formatting';

describe('inputrules', () => {
  const createEditor = createProsemirrorEditorFactory();

  let createAnalyticsEvent: CreateUIAnalyticsEvent;

  const editor = (doc: any) => {
    createAnalyticsEvent = jest.fn(() => ({ fire() {} } as UIAnalyticsEvent));

    return createEditor({
      doc,
      preset: new Preset<LightEditorPlugin>()
        // TODO: Maybe it's worth to split this file to test each input rule for each different plugins
        .add(blockTypePlugin)
        .add([analyticsPlugin, { createAnalyticsEvent }])
        .add(indentationPlugin)
        .add(quickInsertPlugin)
        .add(codeBlockPlugin)
        .add(textFormattingPlugin)
        .add(hyperlinkPlugin)
        .add(typeAheadPlugin),
    });
  };

  function insertAutoformatRule(format: string) {
    const setup = editor(doc(p('{<>}')));
    const { editorView, sel } = setup;

    insertText(editorView, `${format} `, sel);
    return setup;
  }

  describe('heading rule', () => {
    describe('Analytics', () => {
      function createHeadingPayload(
        newHeadingLevel: HeadingLevels,
        inputMethod: string,
      ) {
        return {
          action: 'formatted',
          actionSubject: 'text',
          eventType: 'track',
          actionSubjectId: 'heading',
          attributes: expect.objectContaining({
            inputMethod,
            newHeadingLevel,
          }),
        };
      }

      type AutoFormatCase = {
        autoformatRule: string;
        headingLevel: HeadingLevels;
      };
      const autoFormatCases: AutoFormatCase[] = [
        { autoformatRule: '#', headingLevel: 1 },
        { autoformatRule: '##', headingLevel: 2 },
        { autoformatRule: '###', headingLevel: 3 },
        { autoformatRule: '####', headingLevel: 4 },
        { autoformatRule: '#####', headingLevel: 5 },
        { autoformatRule: '######', headingLevel: 6 },
      ];

      autoFormatCases.forEach(({ autoformatRule, headingLevel }) => {
        it(`should call Analytics GAS v3 with heading level ${headingLevel} for autoformatting '${autoformatRule}'`, () => {
          insertAutoformatRule(autoformatRule);

          expect(createAnalyticsEvent).toHaveBeenCalledWith(
            createHeadingPayload(headingLevel, 'autoformatting'),
          );
        });
      });
    });
    it('should convert "# " to heading 1', () => {
      const { editorView, sel } = editor(doc(p('{<>}')));

      insertText(editorView, '# ', sel);
      expect(editorView.state.doc).toEqualDocument(doc(h1()));
    });

    it('should convert "# " after shift+enter to heading 1', () => {
      const { editorView, sel } = editor(doc(p('test', hardBreak(), '{<>}')));

      insertText(editorView, '# ', sel);
      expect(editorView.state.doc).toEqualDocument(doc(p('test'), h1()));
    });

    it('should not convert "# " to heading 1 when inside a code_block', () => {
      const { editorView, sel } = editor(doc(code_block()('{<>}')));

      insertText(editorView, '# ', sel);
      expect(editorView.state.doc).toEqualDocument(doc(code_block()('# ')));
    });

    it('should convert "## " to heading 2', () => {
      const { editorView, sel } = editor(doc(p('{<>}')));

      insertText(editorView, '## ', sel);
      expect(editorView.state.doc).toEqualDocument(doc(h2()));
    });

    it('should not convert "## " to heading 1 when inside a code_block', () => {
      const { editorView, sel } = editor(doc(code_block()('{<>}')));

      insertText(editorView, '## ', sel);
      expect(editorView.state.doc).toEqualDocument(doc(code_block()('## ')));
    });

    it('should convert "### " to heading 3', () => {
      const { editorView, sel } = editor(doc(p('{<>}')));

      insertText(editorView, '### ', sel);
      expect(editorView.state.doc).toEqualDocument(doc(h3()));
    });

    it('should not convert "### " to heading 3 when inside a code_block', () => {
      const { editorView, sel } = editor(doc(code_block()('{<>}')));

      insertText(editorView, '### ', sel);
      expect(editorView.state.doc).toEqualDocument(doc(code_block()('### ')));
    });

    describe('from quickinsert menu', () => {
      it('should insert when no existing text', () => {
        const { editorView, sel } = editor(doc(p('{<>}')));
        insertText(editorView, '/h1', sel);
        sendKeyToPm(editorView, 'Enter');
        expect(editorView.state.doc).toEqualDocument(doc(h1()));
      });

      it('should insert below when in paragraph', () => {
        const { editorView, sel } = editor(doc(p('hello {<>}world')));
        insertText(editorView, '/h1', sel);
        sendKeyToPm(editorView, 'Enter');
        expect(editorView.state.doc).toEqualDocument(
          doc(p('hello world'), h1()),
        );
      });

      it('should send analytics v3', () => {
        const { editorView, sel } = editor(doc(p('{<>}')));
        insertText(editorView, '/h1', sel);
        sendKeyToPm(editorView, 'Enter');

        const expectedPayload = {
          action: 'formatted',
          actionSubject: 'text',
          eventType: 'track',
          actionSubjectId: 'heading',
          attributes: expect.objectContaining({
            inputMethod: 'quickInsert',
            newHeadingLevel: 1,
          }),
        };
        expect(createAnalyticsEvent).toHaveBeenCalledWith(expectedPayload);
      });
    });
  });

  describe('blockquote rule', () => {
    describe('Analytics', () => {
      it(`should call analytics v3 with blockquote for autoformatting '>'`, () => {
        const greatherThanRule = '>';
        const expectedPayload = {
          action: 'formatted',
          actionSubject: 'text',
          eventType: 'track',
          actionSubjectId: 'blockQuote',
          attributes: expect.objectContaining({
            inputMethod: 'autoformatting',
          }),
        };

        insertAutoformatRule(greatherThanRule);

        expect(createAnalyticsEvent).toHaveBeenCalledWith(expectedPayload);
      });
    });

    it('should convert "> " to a blockquote', () => {
      const { editorView, sel } = editor(doc(p('{<>}')));

      insertText(editorView, '> ', sel);
      expect(editorView.state.doc).toEqualDocument(doc(blockquote(p())));
    });

    it('should convert "> " to a blockquote after shift+enter', () => {
      const { editorView, sel } = editor(doc(p('test', hardBreak(), '{<>}')));

      insertText(editorView, '> ', sel);
      expect(editorView.state.doc).toEqualDocument(
        doc(p('test'), blockquote(p())),
      );
    });

    it('should convert "> " to a blockquote after multiple shift+enter', () => {
      const { editorView, sel } = editor(
        doc(p('test', hardBreak(), hardBreak(), '{<>}test')),
      );

      insertText(editorView, '> ', sel);
      expect(editorView.state.doc).toEqualDocument(
        doc(p('test', hardBreak()), blockquote(p('test'))),
      );
    });

    it('should convert "> " after shift+enter to blockquote for only current line', () => {
      const { editorView, sel } = editor(
        doc(p('test1', hardBreak(), '{<>}test2', hardBreak(), 'test3')),
      );

      insertText(editorView, '> ', sel);
      expect(editorView.state.doc).toEqualDocument(
        doc(p('test1'), blockquote(p('test2')), p('test3')),
      );
    });

    it('should not convert "> " inside code mark to blockquote', () => {
      const { editorView, sel } = editor(doc(p(code('>{<>}'))));

      insertText(editorView, ' ', sel);
      expect(editorView.state.doc).toEqualDocument(doc(p(code('> '))));
    });

    it('should not convert "> " inside link to blockquote', () => {
      const { editorView, sel } = editor(
        doc(p(link({ href: 'http://www.atlassian.com' })('>{<>}'))),
      );
      insertText(editorView, ' ', sel);
      expect(editorView.state.doc).toEqualDocument(
        doc(p(link({ href: 'http://www.atlassian.com' })('>'), ' ')),
      );
    });

    it('should not convert "> " to a blockquote when inside a code_block', () => {
      const { editorView, sel } = editor(doc(code_block()('{<>}')));

      insertText(editorView, '> ', sel);
      expect(editorView.state.doc).toEqualDocument(doc(code_block()('> ')));
    });
  });

  describe('codeblock rule', () => {
    const analyticsV3Payload = {
      action: 'inserted',
      actionSubject: 'document',
      actionSubjectId: 'codeBlock',
      attributes: expect.objectContaining({ inputMethod: 'autoformatting' }),
      eventType: 'track',
    };
    let editorView: EditorView;
    let sel: number;

    it('should remove indentation and convert "```" to a code block', () => {
      ({ editorView, sel } = editor(
        doc(indentation({ level: 3 })(p('{<>}hello', br(), 'world'))),
      ));
      insertText(editorView, '```', sel);

      expect(editorView.state.doc).toEqualDocument(
        doc(code_block()('hello\nworld')),
      );
    });

    describe('typing "```" after text', () => {
      beforeEach(() => {
        ({ editorView, sel } = editor(doc(p('{<>}hello', br(), 'world'))));
        insertText(editorView, '```', sel);
      });

      it('should convert "```" to a code block', () => {
        expect(editorView.state.doc).toEqualDocument(
          doc(code_block()('hello\nworld')),
        );
      });

      it('should fire analytics event', () => {
        expect(createAnalyticsEvent).toBeCalledWith(analyticsV3Payload);
      });
    });

    describe('typing "```" after shift+enter', () => {
      beforeEach(() => {
        ({ editorView, sel } = editor(doc(p('test', hardBreak(), '{<>}'))));
        insertText(editorView, '```', sel);
      });

      it('should convert "```" to a code block', () => {
        expect(editorView.state.doc).toEqualDocument(
          doc(p('test'), code_block()()),
        );
      });

      it('should fire analytics event', () => {
        expect(createAnalyticsEvent).toBeCalledWith(analyticsV3Payload);
      });
    });

    describe('typing "```" in middle of paragraph', () => {
      beforeEach(() => {
        ({ editorView, sel } = editor(doc(p('code ``{<>}block!'))));
        insertText(editorView, '`', sel);
      });

      it('should convert "```" to a code block', () => {
        expect(editorView.state.doc).toEqualDocument(
          doc(p('code '), code_block()('block!')),
        );
      });

      it('should fire analytics event', () => {
        expect(createAnalyticsEvent).toBeCalledWith(analyticsV3Payload);
      });
    });

    describe('typing "```" at end of paragraph', () => {
      beforeEach(() => {
        ({ editorView, sel } = editor(doc(p('code ``{<>}'))));
        insertText(editorView, '`', sel);
      });

      it('should convert "```" to a code block without preceeding content', () => {
        expect(editorView.state.doc).toEqualDocument(
          doc(p('code '), code_block()()),
        );
      });

      it('should fire analytics event', () => {
        expect(createAnalyticsEvent).toBeCalledWith(analyticsV3Payload);
      });
    });

    describe('typing "```" after space', () => {
      beforeEach(() => {
        ({ editorView, sel } = editor(doc(p(' ``{<>}'))));
        insertText(editorView, '`', sel);
      });

      it('should convert "```" to a code block without first character', () => {
        expect(editorView.state.doc).toEqualDocument(
          doc(p(' '), code_block()()),
        );
      });

      it('should fire analytics event', () => {
        expect(createAnalyticsEvent).toBeCalledWith(analyticsV3Payload);
      });
    });
  });
});
