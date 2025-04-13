import type { CollectionConfig } from 'payload'
import { slugField } from 'src/fields/slug'

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
    ...slugField('service-name', {}, 'sidebar'),
    {
      name: 'service-description',
      type: 'textarea',
      label: 'Service Description',
      required: false,
    },
  ],
}
