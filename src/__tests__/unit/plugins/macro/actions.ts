import createEditorFactory from '@atlaskit/editor-test-helpers/create-editor';
import {
  doc,
  p,
  bodiedExtension,
  extension,
} from '@atlaskit/editor-test-helpers/schema-builder';
import { insertMacroFromMacroBrowser } from '../../../../plugins/macro';
import {
  MacroAttributes,
  MacroProvider,
} from '@atlaskit/editor-common/provider-factory';

const macroProvider: MacroProvider = {
  config: {},
  openMacroBrowser: () => {
    const attrs: MacroAttributes = {
      type: 'extension',
      attrs: {
        extensionKey: 'com.fake',
        extensionType: 'com.fake',
        layout: 'full-width',
      },
    };

    return Promise.resolve(attrs);
  },
  autoConvert: () => null,
};

describe('macro plugin -> commands -> insert macro from provider', () => {
  const createEditor = createEditorFactory();

  it('should normalise a nodes layout if nested inside another node', async () => {
    const { editorView } = createEditor({
      doc: doc(
        bodiedExtension({
          extensionKey: 'fake.extension',
          extensionType: 'atlassian.com.editor',
        })(p('{<>}')),
      ),
      editorProps: {
        allowExtension: true,
        macroProvider: Promise.resolve(macroProvider),
      },
    });

    const macroNode = editorView.state.schema.nodes.bodiedExtension.createChecked(
      {
        layout: 'full-width',
        extensionKey: 'com.fake',
        extensionType: 'com.fake',
      },
      editorView.state.schema.nodes.paragraph.createChecked(),
    );

    await insertMacroFromMacroBrowser(macroProvider, macroNode)(
      editorView.state,
      editorView.dispatch,
    );

    expect(editorView.state.doc).toEqualDocument(
      doc(
        bodiedExtension({
          extensionKey: 'fake.extension',
          extensionType: 'atlassian.com.editor',
        })(
          extension({
            extensionKey: 'com.fake',
            extensionType: 'com.fake',
            layout: 'default',
          })(),
        ),
      ),
    );
  });
});
