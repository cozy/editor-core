// eslint-disable-next-line import/no-extraneous-dependencies -- Removed import for fixing circular dependencies
import { doc, p } from '@atlaskit/editor-test-helpers/doc-builder';
import type { DocBuilder } from '@atlaskit/editor-common/types';
// eslint-disable-next-line import/no-extraneous-dependencies
import type { LightEditorPlugin } from '@atlaskit/editor-test-helpers/create-prosemirror-editor';
// eslint-disable-next-line import/no-extraneous-dependencies -- Removed import for fixing circular dependencies
import {
  Preset,
  createProsemirrorEditorFactory,
} from '@atlaskit/editor-test-helpers/create-prosemirror-editor';

import type {
  CreateUIAnalyticsEvent,
  UIAnalyticsEvent,
} from '@atlaskit/analytics-next';

import * as LoadJiraCollectorDialogScript from '../../loadJiraCollectorDialogScript';

// Editor plugins
import feedbackDialogPlugin, { openFeedbackDialog } from '../../index';
import { analyticsPlugin } from '@atlaskit/editor-plugin-analytics';
import { typeAheadPlugin } from '@atlaskit/editor-plugin-type-ahead';
import { quickInsertPlugin } from '@atlaskit/editor-plugin-quick-insert';
import { featureFlagsPlugin } from '@atlaskit/editor-plugin-feature-flags';

const coreVersion = process.env._PACKAGE_VERSION_;

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

  const editor = (doc: DocBuilder, _trackEvent?: () => {}) => {
    createAnalyticsEvent = jest.fn(() => ({ fire() {} } as UIAnalyticsEvent));

    return createEditor({
      doc,
      preset: new Preset<LightEditorPlugin>()
        .add([featureFlagsPlugin, {}])
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

    beforeEach(async () => {
      const { typeAheadTool } = editor(doc(p('{<>}')));

      loadJiraCollectorDialogScript.mockClear();

      await typeAheadTool.searchQuickInsert('bug')?.insert({ index: 0 });
    });

    it('should call "loadJiraCollectorDialogScript" with correct params', () => {
      expect(loadJiraCollectorDialogScript).toHaveBeenCalledWith(
        ['bitbucket', 'atlaskit-comment-bitbucket'],
        'editor',
        coreVersion,
        '666.6.6',
        '',
        '',
        '',
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
      sessionId: '',
      contentId: '',
      tabId: '',
    };
    const param2 = {
      product: 'bitbucket',
      labels: ['label2'],
      packageName: 'package2',
      packageVersion: '444.555.666',
      sessionId: '',
      contentId: '',
      tabId: '',
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
          coreVersion,
          '111.222.333',
          '',
          '',
          '',
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
            coreVersion,
            '111.222.333',
            '',
            '',
            '',
          );
          expect(loadJiraCollectorDialogScript).toHaveBeenCalledWith(
            ['bitbucket', 'label2'],
            'package2',
            coreVersion,
            '444.555.666',
            '',
            '',
            '',
          );
        });
      });
    });

    describe('called with paramId', () => {
      const param3 = {
        product: 'confluence',
        labels: ['label3'],
        packageName: 'package3',
        packageVersion: '777.888.999',
        sessionId: 'sessionId',
        contentId: 'contentId',
        tabId: 'tabId',
      };
      beforeEach(async () => {
        loadJiraCollectorDialogScript.mockClear();
        await openFeedbackDialog(param3);
      });
      it('should call "loadJiraCollectorDialogScript" with correct ids', () => {
        expect(loadJiraCollectorDialogScript).toHaveBeenCalledWith(
          ['confluence', 'label3'],
          'package3',
          coreVersion,
          '777.888.999',
          'sessionId',
          'contentId',
          'tabId',
        );
      });
    });
  });
});
