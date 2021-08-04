import { EditorView } from 'prosemirror-view';
import { doc, p } from '@atlaskit/editor-test-helpers/schema-builder';
import sendKeyToPm from '@atlaskit/editor-test-helpers/send-key-to-pm';
import { insertText } from '@atlaskit/editor-test-helpers/transactions';
import {
  LightEditorPlugin,
  Preset,
  createProsemirrorEditorFactory,
} from '@atlaskit/editor-test-helpers/create-prosemirror-editor';

import {
  CreateUIAnalyticsEvent,
  UIAnalyticsEvent,
} from '@atlaskit/analytics-next';

import * as LoadJiraCollectorDialogScript from '../../loadJiraCollectorDialogScript';

// Editor plugins
import feedbackDialogPlugin, { openFeedbackDialog } from '../../index';
import analyticsPlugin from '../../../analytics';
import typeAheadPlugin from '../../../type-ahead';
import quickInsertPlugin from '../../../quick-insert';

describe('feedbackDialogPlugin', () => {
  const createEditor = createProsemirrorEditorFactory();
  let createAnalyticsEvent: CreateUIAnalyticsEvent;
  const loadJiraCollectorDialogScript = jest.spyOn(
    LoadJiraCollectorDialogScript,
    'default',
  );
  loadJiraCollectorDialogScript.mockImplementation(() =>
    Promise.resolve(() => {}),
  );

  const editor = (doc: any, _trackEvent?: () => {}) => {
    createAnalyticsEvent = jest.fn(() => ({ fire() {} } as UIAnalyticsEvent));

    return createEditor({
      doc,
      preset: new Preset<LightEditorPlugin>()
        .add([
          feedbackDialogPlugin,
          {
            product: 'bitbucket',
            packageVersion: '666.6.6',
            packageName: 'editor',
            labels: ['atlaskit-comment-bitbucket'],
          },
        ])
        .add([analyticsPlugin, { createAnalyticsEvent }])
        .add(typeAheadPlugin)
        .add(quickInsertPlugin),
    });
  };

  describe('Quick insert', () => {
    afterAll(() => {
      delete window.jQuery;
    });

    beforeAll(() => {
      window.jQuery = { ajax: () => {} };
    });

    beforeEach(() => {
      ({ editorView, sel } = editor(doc(p('{<>}'))));

      loadJiraCollectorDialogScript.mockClear();
      insertText(editorView, '/bug', sel);
      sendKeyToPm(editorView, 'Enter');
    });

    let editorView: EditorView;
    let sel: number;

    it('should call "loadJiraCollectorDialogScript" with correct params', () => {
      expect(loadJiraCollectorDialogScript).toHaveBeenCalledWith(
        ['bitbucket', 'atlaskit-comment-bitbucket'],
        'editor',
        '999.9.9',
        '666.6.6',
      );
    });

    it('should fire Analytics GAS V3 events', () => {
      expect(createAnalyticsEvent).toHaveBeenCalledWith({
        action: 'opened',
        actionSubject: 'feedbackDialog',
        eventType: 'ui',
        attributes: expect.objectContaining({
          inputMethod: 'quickInsert',
        }),
      });
    });
  });

  describe('openFeedbackDialog', () => {
    const param1 = {
      product: 'jira',
      labels: ['label1'],
      packageName: 'package1',
      packageVersion: '111.222.333',
    };
    const param2 = {
      product: 'bitbucket',
      labels: ['label2'],
      packageName: 'package2',
      packageVersion: '444.555.666',
    };

    describe('called multiple times with same params', () => {
      beforeEach(async () => {
        loadJiraCollectorDialogScript.mockClear();
        await openFeedbackDialog(param1);
        await openFeedbackDialog(param1);
      });

      it('should call "loadJiraCollectorDialogScript" with correct times and params', () => {
        expect(loadJiraCollectorDialogScript).toBeCalledTimes(1);
        expect(loadJiraCollectorDialogScript).toHaveBeenCalledWith(
          ['jira', 'label1'],
          'package1',
          '999.9.9',
          '111.222.333',
        );
      });

      describe('called multiple times with different params', () => {
        beforeEach(async () => {
          loadJiraCollectorDialogScript.mockClear();
          await openFeedbackDialog(param2);
          await openFeedbackDialog(param1);
        });

        it('should call "loadJiraCollectorDialogScript" with correct times and params', () => {
          expect(loadJiraCollectorDialogScript).toBeCalledTimes(2);
          expect(loadJiraCollectorDialogScript).toHaveBeenCalledWith(
            ['jira', 'label1'],
            'package1',
            '999.9.9',
            '111.222.333',
          );
          expect(loadJiraCollectorDialogScript).toHaveBeenCalledWith(
            ['bitbucket', 'label2'],
            'package2',
            '999.9.9',
            '444.555.666',
          );
        });
      });
    });
  });
});
