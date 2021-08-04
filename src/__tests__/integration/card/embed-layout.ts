import { BrowserTestCase } from '@atlaskit/webdriver-runner/runner';
import {
  goToEditorTestingExample,
  mountEditor,
} from '../../__helpers/testing-example-helpers';
import * as embedCardAdf from './_fixtures_/embed-card.adf.json';
import { editable, getDocFromElement } from '../_helpers';

[
  { type: 'align left', value: 'button[aria-label="Align left"]' },
  { type: 'align right', value: 'button[aria-label="Align right"]' },
  { type: 'wrap left', value: 'button[aria-label="Wrap left"]' },
  { type: 'wrap right', value: 'button[aria-label="Wrap right"]' },
].forEach(layout => {
  BrowserTestCase(
    `embed-layout.ts: Layout ${layout.type} selector for embed Card`,
    { skip: ['edge', 'safari', 'firefox'] },
    async (
      client: Parameters<typeof goToEditorTestingExample>[0],
      testName: string,
    ) => {
      const page = await goToEditorTestingExample(client);
      await mountEditor(page, {
        appearance: 'full-page',
        allowTextAlignment: true,
        defaultValue: JSON.stringify(embedCardAdf),
        UNSAFE_cards: {
          allowBlockCards: true,
          allowEmbeds: true,
        },
      });

      const embedCardSelector = '.embedCardView-content-wrap';
      await page.waitForSelector(embedCardSelector);
      await page.click(`${embedCardSelector} .embed-header`);
      await page.waitForSelector(layout.value);
      await page.click(layout.value);
      expect(
        await page.$eval(editable, getDocFromElement),
      ).toMatchCustomDocSnapshot(testName);
    },
  );
});
