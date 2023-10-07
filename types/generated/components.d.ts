import type { Schema, Attribute } from '@strapi/strapi';

export interface LinkReferences extends Schema.Component {
  collectionName: 'components_link_references';
  info: {
    displayName: 'References';
    icon: 'link';
    description: '';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    link: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'link.references': LinkReferences;
    }
  }
}
