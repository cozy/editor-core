import { BrowserTestCase } from '@atlaskit/webdriver-runner/runner';

import {
  editable,
  getDocFromElement,
  fullpage,
  quickInsert,
  insertBlockMenuItem,
} from '../_helpers';
import {
  mountEditor,
  goToEditorTestingExample,
} from '../../__helpers/testing-example-helpers';

const calendar = '[aria-label="calendar"]';
const nextDate = 'td[aria-selected=true] + td';

BrowserTestCase(
  'change-date-inside-table.ts: Change date inside table',
  { skip: ['edge'] },
  async (client: any, testName: string) => {
    const page = await goToEditorTestingExample(client);
    await mountEditor(page, {
      appearance: fullpage.appearance,
      allowDate: true,
      allowTables: {
        advanced: true,
      },
    });

    await page.click(editable);

    // Insert table
    await quickInsert(page, 'Table');
    // Insert Date
    await insertBlockMenuItem(page, 'Date');
    expect(await page.isExisting(calendar)).toBe(true);

    await page.click(nextDate);

    const doc = await page.$eval(editable, getDocFromElement);
    expect(doc).toMatchCustomDocSnapshot(testName);
  },
);
