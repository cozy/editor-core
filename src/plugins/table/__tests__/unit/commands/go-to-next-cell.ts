import { PluginKey } from 'prosemirror-state';
import { Schema } from 'prosemirror-model';

import {
  createProsemirrorEditorFactory,
  Preset,
  LightEditorPlugin,
} from '@atlaskit/editor-test-helpers/create-prosemirror-editor';
import { RefsNode } from '@atlaskit/editor-test-helpers/src';
import {
  doc,
  table,
  tr,
  td,
  tdEmpty,
  tdCursor,
  p,
} from '@atlaskit/editor-test-helpers/schema-builder';

import tablePlugin from '../../../index';
import { pluginKey } from '../../../pm-plugins/plugin-factory';
import { TablePluginState } from '../../../types';
import { goToNextCell } from '../../../commands/go-to-next-cell';

const tdNextFocus = td()(p('{nextFocus}'));

describe('table plugin: goToNextCell', () => {
  const createEditor = createProsemirrorEditorFactory();
  const preset = new Preset<LightEditorPlugin>().add(tablePlugin);
  const editor = (doc: (schema: Schema) => RefsNode) =>
    createEditor<TablePluginState, PluginKey>({
      doc,
      preset,
      pluginKey,
    });

  it('should do nothing when focus is not on a table', () => {
    const { editorView } = editor(doc(p()));
    const {
      state,
      state: { doc: initialDoc },
      dispatch,
    } = editorView;

    const returnValue = goToNextCell(1)(state, dispatch);

    expect(returnValue).toBeFalsy();
    expect(editorView.state.doc).toEqual(initialDoc);
  });

  it('should tab to next cell if focus is in the middle', () => {
    const { editorView, refs } = editor(
      doc(
        table()(
          tr(tdEmpty, tdCursor, tdNextFocus),
          tr(tdEmpty, tdEmpty, tdEmpty),
        ),
      ),
    );
    const { state, dispatch } = editorView;

    const returnValue = goToNextCell(1)(state, dispatch);

    expect(returnValue).toBeTruthy();
    expect(editorView.state.selection.$anchor.pos).toEqual(refs.nextFocus);
  });

  it('should reverse tab to previous cell if focus is in the middle', () => {
    const { editorView, refs } = editor(
      doc(
        table()(
          tr(tdNextFocus, tdCursor, tdEmpty),
          tr(tdEmpty, tdEmpty, tdEmpty),
        ),
      ),
    );
    const { state, dispatch } = editorView;

    const returnValue = goToNextCell(-1)(state, dispatch);

    expect(returnValue).toBeTruthy();
    expect(editorView.state.selection.$anchor.pos).toEqual(refs.nextFocus);
  });

  it('should insert row at end of table when tabbed on last cell', () => {
    const { editorView } = editor(
      doc(
        table()(tr(tdEmpty, tdEmpty, tdEmpty), tr(tdEmpty, tdEmpty, tdCursor)),
      ),
    );
    const { state, dispatch } = editorView;

    const expected = doc(
      table()(
        tr(tdEmpty, tdEmpty, tdEmpty),
        tr(tdEmpty, tdEmpty, tdEmpty),
        tr(tdNextFocus, tdEmpty, tdEmpty),
      ),
    )(state.schema);

    const returnValue = goToNextCell(1)(state, dispatch);

    expect(returnValue).toBeTruthy();
    expect(expected.eq(editorView.state.doc)).toBeTruthy();
    expect(editorView.state.selection.$anchor.pos).toEqual(32);
  });

  it('should insert row at start of table when reverse tabbed on first cell', () => {
    const { editorView } = editor(
      doc(
        table()(tr(tdCursor, tdEmpty, tdEmpty), tr(tdEmpty, tdEmpty, tdEmpty)),
      ),
    );
    const { state, dispatch } = editorView;

    const expected = doc(
      table()(
        tr(tdNextFocus, tdEmpty, tdEmpty),
        tr(tdEmpty, tdEmpty, tdEmpty),
        tr(tdEmpty, tdEmpty, tdEmpty),
      ),
    )(state.schema);

    const returnValue = goToNextCell(-1)(state, dispatch);

    expect(returnValue).toBeTruthy();
    expect(expected.eq(editorView.state.doc)).toBeTruthy();
    expect(editorView.state.selection.$anchor.pos).toEqual(4);
  });
});
