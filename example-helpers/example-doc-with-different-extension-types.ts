export const exampleDocument = {
  version: 1,
  type: 'doc',
  content: [
    {
      type: 'paragraph',
      content: [],
    },
    {
      type: 'heading',
      attrs: {
        level: 3,
      },
      content: [
        {
          type: 'text',
          text: 'With edit button, from extension provider',
        },
      ],
    },
    {
      type: 'extension',
      attrs: {
        extensionType: 'com.atlassian.confluence.macro.core',
        extensionKey: 'toc',
        parameters: {},
        layout: 'default',
      },
    },
    {
      type: 'heading',
      attrs: {
        level: 3,
      },
      content: [
        {
          type: 'text',
          text:
            'Without edit button, from extension provider, without update method in the node',
        },
      ],
    },
    {
      type: 'extension',
      attrs: {
        extensionType: 'com.atlassian.confluence.macro.core',
        extensionKey: 'perspective-retros-macro',
        parameters: {
          macroParams: {},
        },
        layout: 'default',
      },
    },
    {
      type: 'heading',
      attrs: {
        level: 3,
      },
      content: [
        {
          type: 'text',
          text:
            'Without edit button, from extension handlers, without update method in the handler',
        },
      ],
    },
    {
      type: 'extension',
      attrs: {
        extensionType: 'com.atlassian.extensions.noupdate',
        extensionKey: 'no update',
        parameters: {},
        layout: 'default',
      },
    },
    {
      type: 'heading',
      attrs: {
        level: 3,
      },
      content: [
        {
          type: 'text',
          text: 'With edit button, from macro provider',
        },
      ],
    },
    {
      type: 'extension',
      attrs: {
        extensionType: 'com.atlassian.confluence.macro.core',
        extensionKey: 'block-eh',
        parameters: {
          macroParams: {},
          macroMetadata: {
            placeholder: [
              {
                data: {
                  url: '',
                },
                type: 'icon',
              },
            ],
          },
        },
        text: 'Block extension demo',
        layout: 'default',
      },
    },
  ],
};
