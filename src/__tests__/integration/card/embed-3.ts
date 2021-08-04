import { BrowserTestCase } from '@atlaskit/webdriver-runner/runner';
import { getDocFromElement, editable } from '../_helpers';
import {
  goToEditorTestingExample,
  mountEditor,
} from '../../__helpers/testing-example-helpers';
import { waitForEmbedCardSelection } from '@atlaskit/media-integration-test-helpers';
import { ConfluenceCardProvider } from '../../../../examples/5-full-page-with-confluence-smart-cards';
import * as embedCardAdf from './_fixtures_/embed-card.adf.json';

type ClientType = Parameters<typeof goToEditorTestingExample>[0];

BrowserTestCase(
  'card: copy paste of embed link should work as expected in editor',
  { skip: ['safari', 'edge'] },
  async (client: ClientType, testName: string) => {
    const page = await goToEditorTestingExample(client);

    const cardProviderPromise = Promise.resolve(
      new ConfluenceCardProvider('prod'),
    );

    await mountEditor(page, {
      appearance: 'full-page',
      allowTextAlignment: true,
      defaultValue: JSON.stringify(embedCardAdf),
      UNSAFE_cards: {
        provider: cardProviderPromise,
        allowBlockCards: true,
        allowEmbeds: true,
      },
    });

    await waitForEmbedCardSelection(page);
    // Copy the current link.
    await page.copy();
    // Type some text.
    await page.keys(['ArrowRight', 'Enter']);
    await page.type(editable, 'have another one');
    await page.keys(['Enter']);

    // Paste into same session - there should be two now.
    await page.paste();

    // Type some more text.
    await page.keys(['ArrowRight', 'Enter']);
    await page.type(editable, 'now you have two!');

    expect(
      await page.$eval(editable, getDocFromElement),
    ).toMatchCustomDocSnapshot(testName);
  },
);
