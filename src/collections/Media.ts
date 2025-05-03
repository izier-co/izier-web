import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  admin: {
    useAsTitle: 'alt',
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
    {
      name: 'caption',
      type: 'text',
      required: false,
    },
    {
      name: 'useAs',
      label: 'Image Usage',
      type: 'select',
      required: false,
      options: [
        { label: 'Global Image', value: 'global-image' },
        { label: 'Tech Stack Image', value: 'tech-stack-image' },
        { label: 'Partnership Image', value: 'partnership-image' },
        { label: 'Client Image', value: 'client-image' },
        { label: 'Test Image', value: 'test-image' },
      ],
      hasMany: false,
      defaultValue: 'global-image',
    },
    {
      name: 'isDarkMode',
      label: 'Is Dark Mode',
      type: 'radio',
      required: false,
      options: [
        { label: 'True', value: 'true' },
        { label: 'False', value: 'false' },
      ],
      defaultValue: 'false',
    },
    {
      name: 'isHide',
      label: 'Hide image',
      type: 'radio',
      required: false,
      options: [
        { label: 'True', value: 'true' },
        { label: 'False', value: 'false' },
      ],
      defaultValue: 'false',
    },
  ],
  upload: {
    mimeTypes: ['image/*'],
    formatOptions: {
      format: 'webp',
    },
  },
}
