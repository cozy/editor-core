import {
  initFullPageEditorWithAdf,
  snapshot,
  updateEditorProps,
  Device,
  initEditorWithAdf,
  Appearance,
} from '../_utils';
import { PuppeteerPage } from '@atlaskit/visual-regression/helper';
import mixedContentAdf from './__fixtures__/mixed-content.adf.json';
import layoutWithBreakoutAdf from './__fixtures__/layout-with-breakout.adf.json';
import breakoutAdf from './__fixtures__/mixed-content-with-breakout.adf.json';
import mediaAdf from './__fixtures__/media-single.adf.json';
import resizedTableAdf from './__fixtures__/resized-table.adf.json';
import resizedTableWideAdf from './__fixtures__/resized-table-wide.adf.json';
import resizedTableFullWidthAdf from './__fixtures__/resized-table-full-width.adf.json';
import resizedTableInLayout from './__fixtures__/resized-table-in-layout.adf.json';
import resizedTableInExt from '../table/__fixtures__/nested-table-inside-bodied-ext.adf.json';
import resizedTableFWM from './__fixtures__/resized-table-fwm.adf.json';
import { pressKey } from '../../__helpers/page-objects/_keyboard';
import { clickFirstCell } from '../../../__tests__/__helpers/page-objects/_table';
import { waitForMediaToBeLoaded } from '../../__helpers/page-objects/_media';
import { panelSelectors } from '../../__helpers/page-objects/_panel';

type ToggleFullWidthOptions = {
  // Focus is lost after toggling full width mode so if your test
  // requires a specific element to be focused prior to snapshotting
  // then you can rerun your focus commands via this callback.
  postToggleCallback?: () => void;
};

describe('Snapshot Test: Toggle between full-width and default mode', () => {
  let page: PuppeteerPage;
  let fullWidthMode: boolean;

  const editorProps = {
    allowDynamicTextSizing: true,
    allowLayouts: { allowBreakout: true, UNSAFE_addSidebarLayouts: true },
  };

  const initEditor = async (
    adf: Object,
    viewport?: { width: number; height: number },
  ) => {
    fullWidthMode = false;
    await initFullPageEditorWithAdf(
      page,
      adf,
      Device.LaptopHiDPI,
      viewport,
      editorProps,
      undefined,
      { transition: true },
      true,
    );
  };

  const initFullWidthEditor = async (
    adf: Object,
    viewport?: { width: number; height: number },
  ) => {
    fullWidthMode = true;
    await initEditorWithAdf(page, {
      adf,
      appearance: Appearance.fullWidth,
      device: Device.LaptopHiDPI,
      viewport,
      editorProps,
      forceReload: true,
    });
  };

  const toggleFullWidthProp = async (opts: ToggleFullWidthOptions = {}) => {
    const { postToggleCallback } = opts;
    fullWidthMode = !fullWidthMode;

    await updateEditorProps(page, {
      appearance: fullWidthMode ? 'full-width' : 'full-page',
    });
    await page.waitFor(1000); // wait for transition to complete

    if (postToggleCallback) {
      await postToggleCallback();
    }
  };

  const toggleFullWidthMode = async (opts: ToggleFullWidthOptions = {}) => {
    const timesToToggle = 2;
    const numTimesToToggle = Array(timesToToggle).fill(0);
    for (const _i of numTimesToToggle) {
      await toggleFullWidthProp(opts);
      await snapshot(page);
    }
  };

  beforeEach(() => {
    page = global.page;
  });

  it('displays content correctly', async () => {
    await initEditor(mixedContentAdf);
    await toggleFullWidthMode();
  });

  describe('Breakout', () => {
    const codeSelector = '.code-block';
    it('hides breakout buttons in full-width mode and shows them in default mode', async () => {
      await initEditor(breakoutAdf);
      await page.waitForSelector(codeSelector);
      await page.click(codeSelector);
      await toggleFullWidthMode({
        postToggleCallback: async () => {
          // re-click the codeblock to see its UI controls.
          await page.click(codeSelector);
        },
      });
    });

    it('handles breakout mode + gap cursor', async () => {
      const panelContentSelector = `${panelSelectors.panelContent} p`;
      await initEditor(layoutWithBreakoutAdf, { width: 1440, height: 500 });
      await page.click(panelContentSelector);
      await pressKey(page, ['ArrowRight', 'ArrowRight']);
      await toggleFullWidthProp({
        postToggleCallback: async () => {
          // Reselect the column to see its UI controls
          await page.click(panelContentSelector);
          pressKey(page, ['ArrowRight', 'ArrowRight']);
        },
      });
      await snapshot(page);
    });
  });

  describe('Media', () => {
    it('resizes image correctly', async () => {
      await initEditor(mediaAdf);
      await waitForMediaToBeLoaded(page);
      await toggleFullWidthMode();
    });
  });

  describe('Table resizing', () => {
    // use a smaller viewport for the table tests so differences are picked up as a > 0.1% diff
    const tableViewport = {
      width: 1440,
      height: 450,
    };

    const toggleFullWidthModeForTable = async () =>
      await toggleFullWidthMode({
        postToggleCallback: async () => {
          // Re-click inside the table to see its UI controls
          await clickFirstCell(page);
        },
      });

    it('scales columns up correctly when going default -> full-width', async () => {
      await initEditor(resizedTableAdf, tableViewport);
      await toggleFullWidthModeForTable();
    });

    it('scales columns down correctly when going full-width -> default', async () => {
      await initFullWidthEditor(resizedTableFWM, tableViewport);
      await toggleFullWidthModeForTable();
    });

    it('scales table inside layouts correctly', async () => {
      await initEditor(resizedTableInLayout, tableViewport);
      await toggleFullWidthModeForTable();
    });

    it('scales table inside extension correctly', async () => {
      await initEditor(resizedTableInExt, tableViewport);
      await toggleFullWidthModeForTable();
    });

    describe('breakout modes', () => {
      const breakoutModes = [
        { name: 'wide', adf: resizedTableWideAdf },
        { name: 'full-width', adf: resizedTableFullWidthAdf },
      ];
      breakoutModes.forEach(breakout => {
        it(`scales a ${breakout.name} layout table through modes correctly`, async () => {
          await initEditor(breakout.adf, tableViewport);
          await toggleFullWidthModeForTable();
        });
      });
    });
  });
});
