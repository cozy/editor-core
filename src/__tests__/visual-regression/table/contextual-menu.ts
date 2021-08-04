import { PuppeteerPage } from '@atlaskit/visual-regression/helper';
import { snapshot, initFullPageEditorWithAdf } from '../_utils';
import adf from './__fixtures__/default-table.adf.json';
import {
  clickFirstCell,
  selectTableOption,
  clickCellOptions,
  tableSelectors,
  navigateToTableCell,
  getSelectorForTableCell,
  mergeCells,
  splitCells,
} from '../../__helpers/page-objects/_table';
import { pressKeyCombo } from '../../__helpers/page-objects/_keyboard';

describe('Table contextual menu: fullpage', () => {
  let page: PuppeteerPage;
  const pageInit = async () => {
    page = global.page;
    await initFullPageEditorWithAdf(page, adf);
    await clickFirstCell(page);
  };

  describe('non-numbered column', () => {
    beforeAll(async () => {
      await pageInit();
    });
    it('toggles the context menu correctly', async () => {
      await clickCellOptions(page);
      await snapshot(page);
      await clickCellOptions(page);
      await snapshot(page);
    });

    it('ensures contextual menu button styles are correct', async () => {
      await page.mouse.move(0, 0);
      await snapshot(page, {}, tableSelectors.topLeftCell);
    });
  });
  describe('contextual menu position', () => {
    beforeEach(async () => {
      await pageInit();
    });
    it('update contextual menu button position when number column changes', async () => {
      await selectTableOption(page, 'Numbered column');
      await page.mouse.move(0, 0);
      await snapshot(page);
    });
    it('ensures contextual menu button is positioned correctly after adding column to the right with shortcut key', async () => {
      await navigateToTableCell(page, 1, 2);
      await pressKeyCombo(page, ['Control', 'Alt', 'ArrowRight']);
      await snapshot(page);
    });
    it('ensures contextual menu button is positioned correctly after splitting, merging cells, and undo-ing', async () => {
      const from = getSelectorForTableCell({
        row: 2,
        cell: 1,
      });
      const to = getSelectorForTableCell({ row: 3, cell: 2 });
      await mergeCells(page, from, to);
      await splitCells(page, from);

      // undo to re-merge
      await pressKeyCombo(page, ['Meta', 'KeyZ']);
      await snapshot(page);
    });
  });
});
