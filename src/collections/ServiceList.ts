import type { CollectionConfig } from 'payload'

export const ServiceList: CollectionConfig = {
  slug: 'services',
  admin: {
    useAsTitle: 'service-name',
  },
  fields: [
    {
      name: 'service-name',
      type: 'text',
      label: 'Service Name',
      required: true,
    },
    {
      name: 'service-url',
      type: 'text',
      label: 'Service URL',
      required: true,
    },
    {
      name: 'service-description',
      type: 'textarea',
      label: 'Service Description',
      required: false,
    },
  ],
}
