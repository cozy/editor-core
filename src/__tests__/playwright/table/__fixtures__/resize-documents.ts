// eslint-disable-next-line import/no-extraneous-dependencies -- Removed import for fixing circular dependencies
import {
  doc,
  table,
  tr,
  td,
  th,
} from '@atlaskit/editor-test-helpers/doc-builder';

export const tableWithRowSpan = {
  version: 1,
  type: 'doc',
  content: [
    {
      type: 'table',
      attrs: {
        isNumberColumnEnabled: false,
        layout: 'default',
        localId: 'abc-123',
      },
      content: [
        {
          type: 'tableRow',
          content: [
            {
              type: 'tableHeader',
              attrs: {
                colwidth: [148],
              },
              content: [
                {
                  type: 'paragraph',
                  content: [],
                },
              ],
            },
            {
              type: 'tableHeader',
              attrs: {
                colwidth: [532],
              },
              content: [
                {
                  type: 'paragraph',
                  content: [],
                },
              ],
            },
          ],
        },
        {
          type: 'tableRow',
          content: [
            {
              type: 'tableCell',
              attrs: {
                rowspan: 2,
                colwidth: [148],
              },
              content: [
                {
                  type: 'paragraph',
                  content: [],
                },
              ],
            },
            {
              type: 'tableCell',
              attrs: {
                colwidth: [532],
              },
              content: [
                {
                  type: 'paragraph',
                  content: [],
                },
              ],
            },
          ],
        },
        {
          type: 'tableRow',
          content: [
            {
              type: 'tableCell',
              attrs: {
                colwidth: [532],
              },
              content: [
                {
                  type: 'paragraph',
                  content: [],
                },
              ],
            },
          ],
        },
        {
          type: 'tableRow',
          content: [
            {
              type: 'tableCell',
              attrs: {
                colwidth: [148],
              },
              content: [
                {
                  type: 'paragraph',
                  content: [],
                },
              ],
            },
            {
              type: 'tableCell',
              attrs: {
                colwidth: [532],
              },
              content: [
                {
                  type: 'paragraph',
                  content: [],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: 'paragraph',
      content: [],
    },
  ],
};

export const twoColFullWidthTableWithContent = {
  version: 1,
  type: 'doc',
  content: [
    {
      type: 'table',
      attrs: {
        isNumberColumnEnabled: true,
        layout: 'full-width',
        localId: 'abc-123',
      },
      content: [
        {
          type: 'tableRow',
          content: [
            {
              type: 'tableHeader',
              attrs: {
                colwidth: [868],
              },
              content: [
                {
                  type: 'paragraph',
                  content: [
                    {
                      type: 'text',
                      text: 'Steps to reproduce and screenshots',
                    },
                  ],
                },
              ],
            },
            {
              type: 'tableHeader',
              attrs: {
                colwidth: [888],
              },
              content: [
                {
                  type: 'paragraph',
                  content: [
                    {
                      type: 'text',
                      text: 'Priority',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: 'tableRow',
          content: [
            {
              type: 'tableCell',
              attrs: {
                colwidth: [868],
              },
              content: [
                {
                  type: 'paragraph',
                  content: [
                    {
                      type: 'text',
                      text: 'Possible to create a blank link',
                    },
                  ],
                },
                {
                  type: 'paragraph',
                  content: [
                    {
                      type: 'text',
                      text: 'Steps to reproduce:',
                    },
                    {
                      type: 'hardBreak',
                    },
                    {
                      type: 'text',
                      text: '1. Use markdown for a URL',
                    },
                    {
                      type: 'hardBreak',
                    },
                    {
                      type: 'text',
                      text: '2. Paste a jira link in for the href and immediately close the bracket to complete the markdown',
                    },
                  ],
                },
                {
                  type: 'paragraph',
                  content: [
                    {
                      type: 'text',
                      text: 'Expected behaviour',
                    },
                    {
                      type: 'hardBreak',
                    },
                    {
                      type: 'text',
                      text: 'markdown for URL works correctly? or smartcard overrides it?',
                    },
                  ],
                },
                {
                  type: 'paragraph',
                  content: [
                    {
                      type: 'text',
                      text: 'Actual behaviour',
                    },
                    {
                      type: 'hardBreak',
                    },
                    {
                      type: 'text',
                      text: 'Smartcard link for Jira is still being processed and is entered as the value for the markdown for the URL ',
                    },
                    {
                      type: 'emoji',
                      attrs: {
                        shortName: ':question:',
                        id: 'atlassian-question_mark',
                        text: ':question:',
                      },
                    },
                    {
                      type: 'hardBreak',
                    },
                    {
                      type: 'text',
                      text: 'URL ends up pointing to the confluence edit link but without a page ID so 404s',
                    },
                  ],
                },
              ],
            },
            {
              type: 'tableCell',
              attrs: {
                colwidth: [888],
              },
              content: [
                {
                  type: 'paragraph',
                  content: [
                    {
                      type: 'text',
                      text: 'Papercut',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: 'tableRow',
          content: [
            {
              type: 'tableCell',
              attrs: {
                colwidth: [868],
              },
              content: [
                {
                  type: 'paragraph',
                  content: [
                    {
                      type: 'text',
                      text: "Publishing somewhat big pages doesn't really provide any indication to the user that their page is actually being published and they're going to be navigated away",
                    },
                  ],
                },
              ],
            },
            {
              type: 'tableCell',
              attrs: {
                colwidth: [888],
              },
              content: [
                {
                  type: 'paragraph',
                  content: [
                    {
                      type: 'text',
                      text: 'Papercut',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: 'paragraph',
      content: [],
    },
  ],
};

export const tableWithRowSpanAndColSpan = {
  version: 1,
  type: 'doc',
  content: [
    {
      type: 'table',
      attrs: {
        isNumberColumnEnabled: false,
        layout: 'default',
        localId: 'abc-123',
      },
      content: [
        {
          type: 'tableRow',
          content: [
            {
              type: 'tableHeader',
              attrs: {
                colwidth: [79],
              },
              content: [
                {
                  type: 'paragraph',
                  content: [],
                },
              ],
            },
            {
              type: 'tableHeader',
              attrs: {
                colspan: 2,
                colwidth: [472, 128],
              },
              content: [
                {
                  type: 'paragraph',
                  content: [],
                },
              ],
            },
          ],
        },
        {
          type: 'tableRow',
          content: [
            {
              type: 'tableCell',
              attrs: {
                colspan: 3,
                colwidth: [79, 472, 128],
              },
              content: [
                {
                  type: 'paragraph',
                  content: [],
                },
              ],
            },
          ],
        },
        {
          type: 'tableRow',
          content: [
            {
              type: 'tableCell',
              attrs: {
                rowspan: 2,
                colwidth: [79],
              },
              content: [
                {
                  type: 'paragraph',
                  content: [],
                },
              ],
            },
            {
              type: 'tableCell',
              attrs: {
                colwidth: [472],
              },
              content: [
                {
                  type: 'paragraph',
                  content: [],
                },
              ],
            },
            {
              type: 'tableCell',
              attrs: {
                rowspan: 2,
                colwidth: [128],
              },
              content: [
                {
                  type: 'paragraph',
                  content: [],
                },
              ],
            },
          ],
        },
        {
          type: 'tableRow',
          content: [
            {
              type: 'tableCell',
              attrs: {
                colwidth: [472],
              },
              content: [
                {
                  type: 'paragraph',
                  content: [],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: 'paragraph',
      content: [],
    },
  ],
};

export const tableInsideColumns = {
  version: 1,
  type: 'doc',
  content: [
    {
      type: 'layoutSection',
      content: [
        {
          type: 'layoutColumn',
          attrs: {
            width: 50,
          },
          content: [
            {
              type: 'table',
              attrs: {
                isNumberColumnEnabled: false,
                layout: 'default',
                localId: 'abc-123',
              },
              content: [
                {
                  type: 'tableRow',
                  content: [
                    {
                      type: 'tableHeader',
                      attrs: {
                        colwidth: [202],
                      },
                      content: [
                        {
                          type: 'paragraph',
                          content: [],
                        },
                      ],
                    },
                    {
                      type: 'tableHeader',
                      attrs: {
                        colwidth: [152],
                      },
                      content: [
                        {
                          type: 'paragraph',
                          content: [],
                        },
                      ],
                    },
                    {
                      type: 'tableHeader',
                      attrs: {
                        colwidth: [107],
                      },
                      content: [
                        {
                          type: 'paragraph',
                          content: [],
                        },
                      ],
                    },
                  ],
                },
                {
                  type: 'tableRow',
                  content: [
                    {
                      type: 'tableCell',
                      attrs: {
                        colwidth: [202],
                      },
                      content: [
                        {
                          type: 'paragraph',
                          content: [],
                        },
                      ],
                    },
                    {
                      type: 'tableCell',
                      attrs: {
                        colwidth: [152],
                      },
                      content: [
                        {
                          type: 'paragraph',
                          content: [],
                        },
                      ],
                    },
                    {
                      type: 'tableCell',
                      attrs: {
                        colwidth: [107],
                      },
                      content: [
                        {
                          type: 'paragraph',
                          content: [],
                        },
                      ],
                    },
                  ],
                },
                {
                  type: 'tableRow',
                  content: [
                    {
                      type: 'tableCell',
                      attrs: {
                        colwidth: [202],
                      },
                      content: [
                        {
                          type: 'paragraph',
                          content: [],
                        },
                      ],
                    },
                    {
                      type: 'tableCell',
                      attrs: {
                        colwidth: [152],
                      },
                      content: [
                        {
                          type: 'paragraph',
                          content: [],
                        },
                      ],
                    },
                    {
                      type: 'tableCell',
                      attrs: {
                        colwidth: [107],
                      },
                      content: [
                        {
                          type: 'paragraph',
                          content: [],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: 'layoutColumn',
          attrs: {
            width: 50,
          },
          content: [
            {
              type: 'paragraph',
              content: [],
            },
          ],
        },
      ],
    },
  ],
};

export const resizedTableWithStackedColumns = {
  version: 1,
  type: 'doc',
  content: [
    {
      type: 'table',
      attrs: {
        isNumberColumnEnabled: false,
        layout: 'default',
        localId: 'abc-123',
      },
      content: [
        {
          type: 'tableRow',
          content: [
            {
              type: 'tableHeader',
              attrs: {
                colwidth: [84],
              },
              content: [
                {
                  type: 'paragraph',
                  content: [],
                },
              ],
            },
            {
              type: 'tableHeader',
              attrs: {
                colwidth: [118],
              },
              content: [
                {
                  type: 'paragraph',
                  content: [],
                },
              ],
            },
            {
              type: 'tableHeader',
              attrs: {
                colwidth: [48],
              },
              content: [
                {
                  type: 'paragraph',
                  content: [],
                },
              ],
            },
            {
              type: 'tableHeader',
              attrs: {
                colwidth: [111],
              },
              content: [
                {
                  type: 'paragraph',
                  content: [],
                },
              ],
            },
            {
              type: 'tableHeader',
              attrs: {
                colwidth: [318],
              },
              content: [
                {
                  type: 'paragraph',
                  content: [],
                },
              ],
            },
          ],
        },
        {
          type: 'tableRow',
          content: [
            {
              type: 'tableCell',
              attrs: {
                colwidth: [84],
              },
              content: [
                {
                  type: 'paragraph',
                  content: [],
                },
              ],
            },
            {
              type: 'tableCell',
              attrs: {
                colwidth: [118],
              },
              content: [
                {
                  type: 'paragraph',
                  content: [],
                },
              ],
            },
            {
              type: 'tableCell',
              attrs: {
                colwidth: [48],
              },
              content: [
                {
                  type: 'paragraph',
                  content: [],
                },
              ],
            },
            {
              type: 'tableCell',
              attrs: {
                colwidth: [111],
              },
              content: [
                {
                  type: 'paragraph',
                  content: [],
                },
              ],
            },
            {
              type: 'tableCell',
              attrs: {
                colwidth: [318],
              },
              content: [
                {
                  type: 'paragraph',
                  content: [],
                },
              ],
            },
          ],
        },
        {
          type: 'tableRow',
          content: [
            {
              type: 'tableCell',
              attrs: {
                colwidth: [84],
              },
              content: [
                {
                  type: 'paragraph',
                  content: [],
                },
              ],
            },
            {
              type: 'tableCell',
              attrs: {
                colwidth: [118],
              },
              content: [
                {
                  type: 'paragraph',
                  content: [],
                },
              ],
            },
            {
              type: 'tableCell',
              attrs: {
                colwidth: [48],
              },
              content: [
                {
                  type: 'paragraph',
                  content: [],
                },
              ],
            },
            {
              type: 'tableCell',
              attrs: {
                colwidth: [111],
              },
              content: [
                {
                  type: 'paragraph',
                  content: [],
                },
              ],
            },
            {
              type: 'tableCell',
              attrs: {
                colwidth: [318],
              },
              content: [
                {
                  type: 'paragraph',
                  content: [],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export const tableForBulkResize = {
  version: 1,
  type: 'doc',
  content: [
    {
      type: 'table',
      attrs: {
        isNumberColumnEnabled: false,
        layout: 'default',
        localId: 'abc-123',
      },
      content: [
        {
          type: 'tableRow',
          content: [
            {
              type: 'tableHeader',
              attrs: {
                colwidth: [48],
              },
              content: [
                {
                  type: 'paragraph',
                  content: [],
                },
              ],
            },
            {
              type: 'tableHeader',
              attrs: {
                colwidth: [48],
              },
              content: [
                {
                  type: 'paragraph',
                  content: [],
                },
              ],
            },
            {
              type: 'tableHeader',
              attrs: {
                colwidth: [231],
              },
              content: [
                {
                  type: 'paragraph',
                  content: [],
                },
              ],
            },
            {
              type: 'tableHeader',
              attrs: {
                colwidth: [108],
              },
              content: [
                {
                  type: 'paragraph',
                  content: [],
                },
              ],
            },
            {
              type: 'tableHeader',
              attrs: {
                colwidth: [108],
              },
              content: [
                {
                  type: 'paragraph',
                  content: [],
                },
              ],
            },
            {
              type: 'tableHeader',
              attrs: {
                colwidth: [108],
              },
              content: [
                {
                  type: 'paragraph',
                  content: [],
                },
              ],
            },
            {
              type: 'tableHeader',
              attrs: {
                colwidth: [108],
              },
              content: [
                {
                  type: 'paragraph',
                  content: [],
                },
              ],
            },
          ],
        },
        {
          type: 'tableRow',
          content: [
            {
              type: 'tableCell',
              attrs: {
                colwidth: [48],
              },
              content: [
                {
                  type: 'paragraph',
                  content: [],
                },
              ],
            },
            {
              type: 'tableCell',
              attrs: {
                colwidth: [48],
              },
              content: [
                {
                  type: 'paragraph',
                  content: [],
                },
              ],
            },
            {
              type: 'tableCell',
              attrs: {
                colwidth: [231],
              },
              content: [
                {
                  type: 'paragraph',
                  content: [],
                },
              ],
            },
            {
              type: 'tableCell',
              attrs: {
                colwidth: [108],
              },
              content: [
                {
                  type: 'paragraph',
                  content: [],
                },
              ],
            },
            {
              type: 'tableCell',
              attrs: {
                colwidth: [108],
              },
              content: [
                {
                  type: 'paragraph',
                  content: [],
                },
              ],
            },
            {
              type: 'tableCell',
              attrs: {
                colwidth: [108],
              },
              content: [
                {
                  type: 'paragraph',
                  content: [],
                },
              ],
            },
            {
              type: 'tableCell',
              attrs: {
                colwidth: [108],
              },
              content: [
                {
                  type: 'paragraph',
                  content: [],
                },
              ],
            },
          ],
        },
        {
          type: 'tableRow',
          content: [
            {
              type: 'tableCell',
              attrs: {
                colwidth: [48],
              },
              content: [
                {
                  type: 'paragraph',
                  content: [],
                },
              ],
            },
            {
              type: 'tableCell',
              attrs: {
                colwidth: [48],
              },
              content: [
                {
                  type: 'paragraph',
                  content: [],
                },
              ],
            },
            {
              type: 'tableCell',
              attrs: {
                colwidth: [231],
              },
              content: [
                {
                  type: 'paragraph',
                  content: [],
                },
              ],
            },
            {
              type: 'tableCell',
              attrs: {
                colwidth: [108],
              },
              content: [
                {
                  type: 'paragraph',
                  content: [],
                },
              ],
            },
            {
              type: 'tableCell',
              attrs: {
                colwidth: [108],
              },
              content: [
                {
                  type: 'paragraph',
                  content: [],
                },
              ],
            },
            {
              type: 'tableCell',
              attrs: {
                colwidth: [108],
              },
              content: [
                {
                  type: 'paragraph',
                  content: [],
                },
              ],
            },
            {
              type: 'tableCell',
              attrs: {
                colwidth: [108],
              },
              content: [
                {
                  type: 'paragraph',
                  content: [],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export const tableForBulkResize3Cols = {
  version: 1,
  type: 'doc',
  content: [
    {
      type: 'table',
      attrs: {
        isNumberColumnEnabled: false,
        layout: 'default',
        localId: 'abc-123',
      },
      content: [
        {
          type: 'tableRow',
          content: [
            {
              type: 'tableHeader',
              attrs: {
                colwidth: [119],
              },
              content: [
                {
                  type: 'paragraph',
                  content: [],
                },
              ],
            },
            {
              type: 'tableHeader',
              attrs: {
                colwidth: [110],
              },
              content: [
                {
                  type: 'paragraph',
                  content: [],
                },
              ],
            },
            {
              type: 'tableHeader',
              attrs: {
                colwidth: [403],
              },
              content: [
                {
                  type: 'paragraph',
                  content: [],
                },
              ],
            },
            {
              type: 'tableHeader',
              attrs: {
                colwidth: [48],
              },
              content: [
                {
                  type: 'paragraph',
                  content: [],
                },
              ],
            },
          ],
        },
        {
          type: 'tableRow',
          content: [
            {
              type: 'tableCell',
              attrs: {
                colwidth: [119],
              },
              content: [
                {
                  type: 'paragraph',
                  content: [],
                },
              ],
            },
            {
              type: 'tableCell',
              attrs: {
                colwidth: [110],
              },
              content: [
                {
                  type: 'paragraph',
                  content: [],
                },
              ],
            },
            {
              type: 'tableCell',
              attrs: {
                colwidth: [403],
              },
              content: [
                {
                  type: 'paragraph',
                  content: [],
                },
              ],
            },
            {
              type: 'tableCell',
              attrs: {
                colwidth: [48],
              },
              content: [
                {
                  type: 'paragraph',
                  content: [],
                },
              ],
            },
          ],
        },
        {
          type: 'tableRow',
          content: [
            {
              type: 'tableCell',
              attrs: {
                colwidth: [119],
              },
              content: [
                {
                  type: 'paragraph',
                  content: [],
                },
              ],
            },
            {
              type: 'tableCell',
              attrs: {
                colwidth: [110],
              },
              content: [
                {
                  type: 'paragraph',
                  content: [],
                },
              ],
            },
            {
              type: 'tableCell',
              attrs: {
                colwidth: [403],
              },
              content: [
                {
                  type: 'paragraph',
                  content: [],
                },
              ],
            },
            {
              type: 'tableCell',
              attrs: {
                colwidth: [48],
              },
              content: [
                {
                  type: 'paragraph',
                  content: [],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export const tableForBulkResizeWithNumberCol = {
  version: 1,
  type: 'doc',
  content: [
    {
      type: 'table',
      attrs: {
        isNumberColumnEnabled: true,
        layout: 'default',
        localId: 'abc-123',
      },
      content: [
        {
          type: 'tableRow',
          content: [
            {
              type: 'tableHeader',
              attrs: {
                colwidth: [134],
              },
              content: [
                {
                  type: 'paragraph',
                  content: [],
                },
              ],
            },
            {
              type: 'tableHeader',
              attrs: {
                colwidth: [519],
              },
              content: [
                {
                  type: 'paragraph',
                  content: [],
                },
              ],
            },
            {
              type: 'tableHeader',
              attrs: {
                colwidth: [48],
              },
              content: [
                {
                  type: 'paragraph',
                  content: [],
                },
              ],
            },
            {
              type: 'tableHeader',
              attrs: {
                colwidth: [48],
              },
              content: [
                {
                  type: 'paragraph',
                  content: [],
                },
              ],
            },
          ],
        },
        {
          type: 'tableRow',
          content: [
            {
              type: 'tableCell',
              attrs: {
                colwidth: [134],
              },
              content: [
                {
                  type: 'paragraph',
                  content: [],
                },
              ],
            },
            {
              type: 'tableCell',
              attrs: {
                colwidth: [519],
              },
              content: [
                {
                  type: 'paragraph',
                  content: [],
                },
              ],
            },
            {
              type: 'tableCell',
              attrs: {
                colwidth: [48],
              },
              content: [
                {
                  type: 'paragraph',
                  content: [],
                },
              ],
            },
            {
              type: 'tableCell',
              attrs: {
                colwidth: [48],
              },
              content: [
                {
                  type: 'paragraph',
                  content: [],
                },
              ],
            },
          ],
        },
        {
          type: 'tableRow',
          content: [
            {
              type: 'tableCell',
              attrs: {
                colwidth: [134],
              },
              content: [
                {
                  type: 'paragraph',
                  content: [],
                },
              ],
            },
            {
              type: 'tableCell',
              attrs: {
                colwidth: [519],
              },
              content: [
                {
                  type: 'paragraph',
                  content: [],
                },
              ],
            },
            {
              type: 'tableCell',
              attrs: {
                colwidth: [48],
              },
              content: [
                {
                  type: 'paragraph',
                  content: [],
                },
              ],
            },
            {
              type: 'tableCell',
              attrs: {
                colwidth: [48],
              },
              content: [
                {
                  type: 'paragraph',
                  content: [],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: 'paragraph',
      content: [],
    },
  ],
};

export const tableWithMinWidthColumnsDocument = {
  version: 1,
  type: 'doc',
  content: [
    {
      type: 'table',
      attrs: {
        isNumberColumnEnabled: false,
        layout: 'default',
        localId: 'abc-123',
      },
      content: [
        {
          type: 'tableRow',
          content: [
            {
              type: 'tableHeader',
              attrs: {
                colwidth: [48],
              },
              content: [
                {
                  type: 'paragraph',
                  content: [],
                },
              ],
            },
            {
              type: 'tableHeader',
              attrs: {
                colwidth: [48],
              },
              content: [
                {
                  type: 'paragraph',
                  content: [],
                },
              ],
            },
            {
              type: 'tableHeader',
              attrs: {
                colwidth: [48],
              },
              content: [
                {
                  type: 'paragraph',
                  content: [],
                },
              ],
            },
            {
              type: 'tableHeader',
              attrs: {
                colwidth: [535],
              },
              content: [
                {
                  type: 'paragraph',
                  content: [],
                },
              ],
            },
          ],
        },
        {
          type: 'tableRow',
          content: [
            {
              type: 'tableCell',
              attrs: {
                colwidth: [48],
              },
              content: [
                {
                  type: 'paragraph',
                  content: [],
                },
              ],
            },
            {
              type: 'tableCell',
              attrs: {
                colwidth: [48],
              },
              content: [
                {
                  type: 'paragraph',
                  content: [],
                },
              ],
            },
            {
              type: 'tableCell',
              attrs: {
                colwidth: [48],
              },
              content: [
                {
                  type: 'paragraph',
                  content: [],
                },
              ],
            },
            {
              type: 'tableCell',
              attrs: {
                colwidth: [535],
              },
              content: [
                {
                  type: 'paragraph',
                  content: [],
                },
              ],
            },
          ],
        },
        {
          type: 'tableRow',
          content: [
            {
              type: 'tableCell',
              attrs: {
                colwidth: [48],
              },
              content: [
                {
                  type: 'paragraph',
                  content: [],
                },
              ],
            },
            {
              type: 'tableCell',
              attrs: {
                colwidth: [48],
              },
              content: [
                {
                  type: 'paragraph',
                  content: [],
                },
              ],
            },
            {
              type: 'tableCell',
              attrs: {
                colwidth: [48],
              },
              content: [
                {
                  type: 'paragraph',
                  content: [],
                },
              ],
            },
            {
              type: 'tableCell',
              attrs: {
                colwidth: [535],
              },
              content: [
                {
                  type: 'paragraph',
                  content: [],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export const tableNestedInExpandDefaultWidth = {
  version: 1,
  type: 'doc',
  content: [
    {
      type: 'paragraph',
      content: [],
    },
    {
      type: 'expand',
      attrs: {
        title: '',
      },
      content: [
        {
          type: 'table',
          attrs: {
            isNumberColumnEnabled: false,
            layout: 'default',
            localId: '8d7486b8-777f-4dc8-b709-0675990a949b',
          },
          content: [
            {
              type: 'tableRow',
              content: [
                {
                  type: 'tableHeader',
                  attrs: {
                    colwidth: [148],
                  },
                  content: [
                    {
                      type: 'paragraph',
                      content: [],
                    },
                  ],
                },
                {
                  type: 'tableHeader',
                  attrs: {
                    colwidth: [243],
                  },
                  content: [
                    {
                      type: 'paragraph',
                      content: [],
                    },
                  ],
                },
                {
                  type: 'tableHeader',
                  attrs: {
                    colwidth: [338],
                  },
                  content: [
                    {
                      type: 'paragraph',
                      content: [],
                    },
                  ],
                },
              ],
            },
            {
              type: 'tableRow',
              content: [
                {
                  type: 'tableCell',
                  attrs: {
                    colwidth: [148],
                  },
                  content: [
                    {
                      type: 'paragraph',
                      content: [],
                    },
                  ],
                },
                {
                  type: 'tableCell',
                  attrs: {
                    colwidth: [243],
                  },
                  content: [
                    {
                      type: 'paragraph',
                      content: [],
                    },
                  ],
                },
                {
                  type: 'tableCell',
                  attrs: {
                    colwidth: [338],
                  },
                  content: [
                    {
                      type: 'paragraph',
                      content: [],
                    },
                  ],
                },
              ],
            },
            {
              type: 'tableRow',
              content: [
                {
                  type: 'tableCell',
                  attrs: {
                    colwidth: [148],
                  },
                  content: [
                    {
                      type: 'paragraph',
                      content: [],
                    },
                  ],
                },
                {
                  type: 'tableCell',
                  attrs: {
                    colwidth: [243],
                  },
                  content: [
                    {
                      type: 'paragraph',
                      content: [],
                    },
                  ],
                },
                {
                  type: 'tableCell',
                  attrs: {
                    colwidth: [338],
                  },
                  content: [
                    {
                      type: 'paragraph',
                      content: [],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export const tableNestedInExpandFullWidth = {
  version: 1,
  type: 'doc',
  content: [
    {
      type: 'paragraph',
      content: [],
    },
    {
      type: 'expand',
      attrs: {
        title: '',
      },
      content: [
        {
          type: 'table',
          attrs: {
            isNumberColumnEnabled: false,
            layout: 'default',
            localId: '8d7486b8-777f-4dc8-b709-0675990a949b',
          },
          content: [
            {
              type: 'tableRow',
              content: [
                {
                  type: 'tableHeader',
                  attrs: {
                    colwidth: [159],
                  },
                  content: [
                    {
                      type: 'paragraph',
                      content: [],
                    },
                  ],
                },
                {
                  type: 'tableHeader',
                  attrs: {
                    colwidth: [368],
                  },
                  content: [
                    {
                      type: 'paragraph',
                      content: [],
                    },
                  ],
                },
                {
                  type: 'tableHeader',
                  attrs: {
                    colwidth: [477],
                  },
                  content: [
                    {
                      type: 'paragraph',
                      content: [],
                    },
                  ],
                },
              ],
            },
            {
              type: 'tableRow',
              content: [
                {
                  type: 'tableCell',
                  attrs: {
                    colwidth: [159],
                  },
                  content: [
                    {
                      type: 'paragraph',
                      content: [],
                    },
                  ],
                },
                {
                  type: 'tableCell',
                  attrs: {
                    colwidth: [368],
                  },
                  content: [
                    {
                      type: 'paragraph',
                      content: [],
                    },
                  ],
                },
                {
                  type: 'tableCell',
                  attrs: {
                    colwidth: [477],
                  },
                  content: [
                    {
                      type: 'paragraph',
                      content: [],
                    },
                  ],
                },
              ],
            },
            {
              type: 'tableRow',
              content: [
                {
                  type: 'tableCell',
                  attrs: {
                    colwidth: [159],
                  },
                  content: [
                    {
                      type: 'paragraph',
                      content: [],
                    },
                  ],
                },
                {
                  type: 'tableCell',
                  attrs: {
                    colwidth: [368],
                  },
                  content: [
                    {
                      type: 'paragraph',
                      content: [],
                    },
                  ],
                },
                {
                  type: 'tableCell',
                  attrs: {
                    colwidth: [477],
                  },
                  content: [
                    {
                      type: 'paragraph',
                      content: [],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
      marks: [
        {
          type: 'breakout',
          attrs: {
            mode: 'full-width',
          },
        },
      ],
    },
  ],
};

export const createSquareTable = ({
  lines,
  columnWidths,
  hasHeader,
  tableWidth,
}: {
  lines: number;
  columnWidths: Array<number>;
  hasHeader?: boolean;
  tableWidth?: number;
}) => {
  const tableContent = Array.from({ length: lines }).map((_, index) => {
    const addTableHeader = index === 0 && hasHeader;
    const cell = addTableHeader ? th : td;

    const tableRowContent = columnWidths.map(
      (width) => cell({ colwidth: [width] }).any,
    );

    return tr(...tableRowContent);
  });

  if (tableWidth && tableWidth > 0) {
    return doc(
      table({ localId: 'localId', width: tableWidth })(...tableContent),
    );
  } else {
    return doc(table({ localId: 'localId' })(...tableContent));
  }
};
