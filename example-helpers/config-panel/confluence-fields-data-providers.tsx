import React from 'react';
import PersonIcon from '@atlaskit/icon/glyph/person';
import FolderFilledIcon from '@atlaskit/icon/glyph/folder-filled';
import PageIcon from '@atlaskit/icon/glyph/page';
import DocumentFilledIcon from '@atlaskit/icon/glyph/document-filled';
import LabelIcon from '@atlaskit/icon/glyph/label';
import { Option } from '@atlaskit/editor-common/extensions';

const createCustomFieldResolver = (items: Option[], lazyItems?: Option[]) => (
  searchTerm?: string,
  defaultValue?: string[] | string,
): Promise<Option[]> => {
  const filter = (term?: string | string[], items?: Option[]): Option[] => {
    if (!Array.isArray(items)) {
      return [];
    }

    const filterByTerm = (term?: string): Option[] => {
      if (!term) {
        return items;
      }
      return items.filter(
        item =>
          item.label.search(new RegExp(term, 'i')) !== -1 ||
          item.value.search(new RegExp(term, 'i')) !== -1,
      );
    };

    if (Array.isArray(term)) {
      return ([] as Option[]).concat(...term.map(filterByTerm));
    }
    return filterByTerm(term);
  };

  if (searchTerm) {
    return Promise.resolve(filter(searchTerm, items));
  }
  if (defaultValue) {
    return Promise.resolve([...items, ...filter(defaultValue, lazyItems)]);
  }
  return Promise.resolve(items);
};

export const spaceKeyFieldResolver = createCustomFieldResolver([
  {
    label: 'XRay',
    value: 'XR',
    icon: <FolderFilledIcon size="small" label="XR" />,
  },
  {
    label: 'Feature Flags',
    value: 'FF',
    icon: <FolderFilledIcon size="small" label="FF" />,
  },
  {
    label: 'Sunny days',
    value: 'SD',
    icon: <FolderFilledIcon size="small" label="SD" />,
  },
  {
    label: 'Bushfires',
    value: 'BF',
    icon: <FolderFilledIcon size="small" label="BF" />,
  },
]);
export const usernameFieldResolver = createCustomFieldResolver(
  [
    {
      label: 'Leandro Augusto Lemos',
      value: 'llemos',
      icon: <PersonIcon size="small" label="llemos" />,
    },
    {
      label: 'Rifat Nabi',
      value: 'rnabi',
      icon: <PersonIcon size="small" label="rnabi" />,
    },
  ],
  [
    {
      label: 'Ajay Kumar',
      value: 'akumar',
      icon: <PersonIcon size="small" label="akumar" />,
    },
  ],
);
export const labelFieldResolver = createCustomFieldResolver([
  {
    label: 'Meeting notes',
    value: 'meeting-notes',
    icon: <LabelIcon size="small" label="meeting-notes" />,
  },
  {
    label: 'Decision register',
    value: 'decision-register',
    icon: <LabelIcon size="small" label="decision-register" />,
  },
]);
export const confluenceContentFieldResolver = createCustomFieldResolver([
  {
    label: 'How to populate custom fields?',
    value: '123456',
    description: 'Page',
    icon: <PageIcon size="medium" label="123456" />,
  },
  {
    label: 'What should we do with X?',
    value: '654321',
    description: 'Document',
    icon: <DocumentFilledIcon size="medium" label="654321" />,
  },
]);
