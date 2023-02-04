import { Block } from 'payload/types';
// import { Type as MediaType } from '../../collections/Media';

export type Type = {
  blockType: 'single-media';
  blockName?: string;
  media: any;
  caption?: any;
  type: 'normal' | 'wide' | 'fullscreen';
};

export const SingleMedia: Block = {
  slug: 'single-media',
  labels: {
    singular: 'Media Block',
    plural: 'Media Blocks',
  },
  fields: [
    {
      name: 'media',
      label: 'Media',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'type',
      label: 'Type',
      type: 'radio',
      defaultValue: 'normal',
      options: [
        {
          label: 'Normal',
          value: 'normal',
        },
        {
          label: 'Fullscreen',
          value: 'fullscreen',
        },
        {
          label: 'Wide',
          value: 'wide',
        },
      ],
      admin: {
        layout: 'horizontal',
      },
    },
    {
      name: 'caption',
      label: 'Caption',
      type: 'richText',
      admin: {
        elements: ['link'],
      },
    },
  ],
};
