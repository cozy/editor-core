import React from 'react';

import { ProviderFactory } from '@atlaskit/editor-common';
import { createEditorFactory } from '@atlaskit/editor-test-helpers/create-editor';
import { mountWithIntl } from '@atlaskit/editor-test-helpers/enzyme';
import { doc, p, DocBuilder } from '@atlaskit/editor-test-helpers/doc-builder';

import ToolbarTask from '../../../../../plugins/tasks-and-decisions/ui/ToolbarTask';
import ToolbarButton from '../../../../../ui/ToolbarButton';

describe('tasks and decisions - ToolbarTask', () => {
  const createEditor = createEditorFactory();

  const providerFactory = new ProviderFactory();
  const editor = (doc: DocBuilder) =>
    createEditor({
      doc,
      editorProps: { allowTasksAndDecisions: true },
    });

  afterAll(() => {
    providerFactory.destroy();
  });

  it('should be disabled if isDisabled property is true', () => {
    const { editorView } = editor(doc(p('text')));
    const toolbarOption = mountWithIntl(
      <ToolbarTask editorView={editorView} isDisabled={true} />,
    );
    expect(toolbarOption.find(ToolbarButton).prop('disabled')).toEqual(true);
    toolbarOption.unmount();
  });
});
