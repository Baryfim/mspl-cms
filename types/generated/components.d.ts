import type { Schema, Struct } from '@strapi/strapi';

export interface MailIcon extends Struct.ComponentSchema {
  collectionName: 'components_mail_icons';
  info: {
    displayName: 'icon';
    icon: 'earth';
  };
  attributes: {};
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'mail.icon': MailIcon;
    }
  }
}
