export enum EVENT_TYPE {
  OPERATIONAL = 'operational',
  SCREEN = 'screen',
  TRACK = 'track',
  UI = 'ui',
}

export enum ACTION {
  ACTIVATED = 'activated',
  ADDED = 'added',
  BROWSER_FREEZE = 'browserFreeze',
  CHANGED_FULL_WIDTH_MODE = 'changedFullWidthMode',
  CHANGED_LAYOUT = 'changedLayout',
  CHANGED_REPLACEMENT_TEXT = 'changedReplacementText',
  CHANGED_TYPE = 'changedType',
  CHANGED_URL = 'changedUrl',
  CLEARED = 'cleared',
  CLICKED = 'clicked',
  CLOSED = 'closed',
  COPIED = 'copied',
  COMMITTED = 'committed',
  CONVERTED = 'converted',
  CUT = 'cut',
  DEACTIVATED = 'deactivated',
  DECREMENTED = 'decremented',
  DELETED = 'deleted',
  DISPATCHED_INVALID_TRANSACTION = 'dispatchedInvalidTransaction',
  DISCARDED_INVALID_STEPS_FROM_TRANSACTION = 'discardedInvalidStepsFromTransaction',
  EDITED = 'edited',
  EDITOR_CRASHED = 'unhandledErrorCaught',
  EDITOR_MOUNTED = 'mounted',
  EDITOR_TTI = 'tti',
  ERRORED = 'errored',
  FAILED_TO_UNMOUNT = 'failedToUnmount',
  FIND_PERFORMED = 'findPerformed',
  FIND_NEXT_PERFORMED = 'findNextPerformed',
  FIND_PREV_PERFORMED = 'findPrevPerformed',
  FORMATTED = 'formatted',
  HELP_OPENED = 'helpOpened',
  INPUT_PERF_SAMPLING = 'inputPerfSampling',
  INCREMENTED = 'incremented',
  INSERTED = 'inserted',
  INVOKED = 'invoked',
  OPENED = 'opened',
  PASTED = 'pasted',
  PASTED_AS_PLAIN = 'pastedAsPlain',
  PROSEMIRROR_RENDERED = 'proseMirrorRendered',
  REACT_NODEVIEW_RENDERED = 'reactNodeViewRendered',
  REDID = 'redid',
  REPLACED_ONE = 'replacedOne',
  REPLACED_ALL = 'replacedAll',
  RESOLVED = 'resolved',
  SELECTED = 'selected',
  SLOW_INPUT = 'slowInput',
  STARTED = 'started',
  STOPPED = 'stopped',
  SUBSTITUTED = 'autoSubstituted',
  TOGGLE_EXPAND = 'toggleExpand',
  UNDID = 'undid',
  UNLINK = 'unlinked',
  UNSUPPORTED_CONTENT_ENCOUNTERED = 'unsupportedContentEncountered',
  UPLOAD_EXTERNAL_FAIL = 'uploadExternalFailed',
  TRANSACTION_DISPATCHED = 'transactionDispatched',
  TYPING_STARTED = 'typingStarted',
  TYPING_FINISHED = 'typingFinished',
  VIEWED = 'viewed',
  VISITED = 'visited',
  WITH_PLUGIN_STATE_CALLED = 'withPluginStateCalled',
  SYNCHRONY_ERROR = 'synchronyError',
  SYNCHRONY_DISCONNECTED = 'synchronyDisconnected',
  SYNCHRONY_ENTITY_ERROR = 'synchronyEntityError',
  LIST_ITEM_JOINED = 'listItemJoined',
  INDENTED = 'indented',
  OUTDENTED = 'outdented',
  NODE_CONTENT_SANITIZED = 'nodeContentSanitized',
  ENTERED = 'entered',
  SHOWN = 'shown',
  HIGHLIGHTED = 'highlighted',
  DISMISSED = 'dismissed',
  FIXED = 'fixed',
}

export enum INPUT_METHOD {
  ASCII = 'ascii',
  AUTO = 'auto',
  AUTO_DETECT = 'autoDetect',
  BUTTON = 'button',
  BLUR = 'blur',
  CARD = 'card',
  CLIPBOARD = 'clipboard',
  CONTEXT_MENU = 'contextMenu',
  DRAG_AND_DROP = 'dragAndDrop',
  EXTERNAL = 'external',
  FLOATING_TB = 'floatingToolbar',
  FORMATTING = 'autoformatting',
  INSERT_MENU = 'insertMenu',
  KEYBOARD = 'keyboard',
  MANUAL = 'manual',
  PICKER = 'picker',
  PICKER_CLOUD = 'cloudPicker',
  PREFILL = 'prefill',
  QUICK_INSERT = 'quickInsert',
  SHORTCUT = 'shortcut',
  TOOLBAR = 'toolbar',
  TYPEAHEAD = 'typeAhead',
}

export enum TRIGGER_METHOD {
  BUTTON = 'button',
  KEYBOARD = 'keyboard', // single key, e.g. Esc, Enter
  SHORTCUT = 'shortcut', // combination of keys, e.g. Mod + F
  TOOLBAR = 'toolbar',
}

export enum ACTION_SUBJECT {
  BUTTON = 'button',
  CONFIG_PANEL = 'configPanel',
  DATE = 'date',
  DATE_SEGMENT = 'dateSegment',
  DOCUMENT = 'document',
  EDITOR = 'editor',
  ELEMENT_BROWSER = 'elementBrowser',
  EMBEDS = 'embeds',
  EXPAND = 'expand',
  FEEDBACK_DIALOG = 'feedbackDialog',
  FIND_REPLACE_DIALOG = 'findReplaceDialog',
  HELP = 'help',
  LAYOUT = 'layout',
  LIST = 'list',
  MEDIA = 'media',
  MEDIA_SINGLE = 'mediaSingle',
  NESTED_EXPAND = 'nestedExpand',
  PANEL = 'panel',
  PICKER = 'picker',
  PLUS_MENU = 'plusMenu',
  SMART_LINK = 'smartLink',
  TABLE = 'table',
  TEXT = 'text',
  TOOLBAR = 'toolbar',
  TYPEAHEAD = 'typeAhead',
  ANNOTATION = 'annotation',
  SEARCH_RESULT = 'searchResult',
  CREATE_LINK_INLINE_DIALOG = 'createLinkInlineDialog',
}

export enum ACTION_SUBJECT_ID {
  ACTION = 'action',
  ALL = 'all',
  ALT_TEXT = 'altText',
  ANNOTATE_BUTTON = 'annotateButton',
  BLOCK_QUOTE = 'blockQuote',
  BUTTON_FEEDBACK = 'feedbackButton',
  BUTTON_HELP = 'helpButton',
  CANCEL = 'cancel',
  CARD_BLOCK = 'blockCard',
  CARD_INLINE = 'inlineCard',
  CELL = 'cell',
  CODE_BLOCK = 'codeBlock',
  DATE = 'date',
  DATE_DAY = 'day',
  DATE_MONTH = 'month',
  DATE_YEAR = 'year',
  DECISION = 'decision',
  DIVIDER = 'divider',
  EMOJI = 'emoji',
  EXPAND = 'expand',
  EXTENSION = 'extension',
  FORMAT_BLOCK_QUOTE = 'blockQuote',
  FORMAT_CLEAR = 'clearFormatting',
  FORMAT_CODE = 'code',
  FORMAT_COLOR = 'color',
  FORMAT_HEADING = 'heading',
  FORMAT_INDENT = 'indentation',
  FORMAT_ITALIC = 'italic',
  FORMAT_LIST_BULLET = 'bulletedList',
  FORMAT_LIST_NUMBER = 'numberedList',
  FORMAT_STRIKE = 'strike',
  FORMAT_STRONG = 'strong',
  FORMAT_SUB = 'subscript',
  FORMAT_SUPER = 'superscript',
  FORMAT_UNDERLINE = 'underline',
  HELP_QUICK_INSERT = 'helpQuickInsert',
  INLINE_COMMENT = 'inlineComment',
  LAYOUT = 'layout',
  RICH_MEDIA_LAYOUT = 'richMediaLayout',
  LINE_BREAK = 'lineBreak',
  LINK = 'link',
  LINK_PREVIEW = 'linkPreview',
  MEDIA = 'media',
  MEDIA_SINGLE = 'mediaSingle',
  MEDIA_GROUP = 'mediaGroup',
  MEDIA_LINK = 'mediaLink',
  MENTION = 'mention',
  NESTED_EXPAND = 'nestedExpand',
  NODE = 'node',
  PANEL = 'panel',
  PASTE_BLOCK_CARD = 'blockCard',
  PASTE_BLOCKQUOTE = 'blockQuote',
  PASTE_BODIED_EXTENSION = 'bodiedExtension',
  PASTE_BULLET_LIST = 'bulletList',
  PASTE_CODE_BLOCK = 'codeBlock',
  PASTE_DECISION_LIST = 'decisionList',
  PASTE_EXPAND = 'expand',
  PASTE_EXTENSION = 'extension',
  PASTE_HEADING = 'heading',
  PASTE_MEDIA_GROUP = 'mediaGroup',
  PASTE_MEDIA_SINGLE = 'mediaSingle',
  PASTE_NESTED_EXPAND = 'nestedExpand',
  PASTE_ORDERED_LIST = 'orderedList',
  PASTE_PANEL = 'panel',
  PASTE_PARAGRAPH = 'paragraph',
  PASTE_RULE = 'rule',
  PASTE_TABLE = 'table',
  PASTE_TABLE_CELL = 'tableCell',
  PASTE_TABLE_HEADER = 'tableHeader',
  PASTE_TABLE_ROW = 'tableRow',
  PASTE_TASK_LIST = 'taskList',
  PICKER_CLOUD = 'cloudPicker',
  PICKER_EMOJI = 'emojiPicker',
  PRODUCT_NAME = 'productName',
  PUNC = 'punctuation',
  RANGE = 'range',
  REACT_NODE_VIEW = 'reactNodeView',
  RESIZED = 'resized',
  SAVE = 'save',
  SECTION = 'section',
  SMART_LINK = 'smartLink',
  STATUS = 'status',
  SYMBOL = 'symbol',
  TABLE = 'table',
  TEXT = 'text',
  TYPEAHEAD_EMOJI = 'emojiTypeAhead',
  TYPEAHEAD_LINK = 'linkTypeAhead',
  TYPEAHEAD_MENTION = 'mentionTypeAhead',
  TYPEAHEAD_QUICK_INSERT = 'quickInsertTypeAhead',
  UNSUPPORTED_BLOCK = 'unsupportedBlock',
  UNSUPPORTED_INLINE = 'unsupportedInline',
  UNSUPPORTED_MARK = 'unsupportedMark',
  RECENT_ACTIVITIES = 'recentActivities',
  QUICK_SEARCH = 'quickSearch',
  LINK_SEARCH_INPUT = 'linkSearchInput',
  PRE_QUERY_SEARCH_RESULTS = 'preQuerySearchResults',
  POST_QUERY_SEARCH_RESULTS = 'postQuerySearchResults',
}
