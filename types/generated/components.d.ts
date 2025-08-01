import type { Schema, Struct } from '@strapi/strapi';

export interface LinkReferences extends Struct.ComponentSchema {
  collectionName: 'components_link_references';
  info: {
    description: '';
    displayName: 'References';
    icon: 'link';
  };
  attributes: {
    link: Schema.Attribute.String & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'link.references': LinkReferences;
    }
  }
}
