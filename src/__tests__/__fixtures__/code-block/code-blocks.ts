export const codeBlocks = {
  version: 1,
  type: 'doc',
  content: [
    {
      type: 'codeBlock',
      attrs: {},
      content: [
        {
          type: 'text',
          text: 'center',
        },
      ],
    },
    {
      type: 'codeBlock',
      attrs: {},
      content: [
        {
          type: 'text',
          text: 'wide',
        },
      ],
      marks: [
        {
          type: 'breakout',
          attrs: {
            mode: 'wide',
          },
        },
      ],
    },
    {
      type: 'codeBlock',
      attrs: {
        language: 'diff',
      },
      content: [
        {
          type: 'text',
          text: 'full',
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
