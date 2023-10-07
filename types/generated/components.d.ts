import type { Schema, Attribute } from '@strapi/strapi';

export interface LinkReferences extends Schema.Component {
  collectionName: 'components_link_references';
  info: {
    displayName: 'References';
    icon: 'link';
  };
  attributes: {
    name: Attribute.String & Attribute.Required & Attribute.Unique;
    link: Attribute.String & Attribute.Required & Attribute.Unique;
  };
}

declare module '@strapi/strapi' {
  export module Shared {
    export interface Components {
      'link.references': LinkReferences;
    }
  }
}
