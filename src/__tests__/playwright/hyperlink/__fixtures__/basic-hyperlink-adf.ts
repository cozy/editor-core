export const basicHyperlinkAdf = {
  version: 1,
  type: 'doc',
  content: [
    {
      type: 'paragraph',
      content: [
        {
          type: 'text',
          text: 'http://atlassian.com',
          marks: [
            {
              type: 'link',
              attrs: {
                href: 'http://atlassian.com',
              },
            },
          ],
        },
      ],
    },
  ],
};
