import { createCollection } from 'meteor/vulcan:core';
import schema from './schema.js';

const Emails = createCollection({
  collectionName: 'Emails',
  typeName: 'Email',
  schema,

  permissions: {
    canRead: ['guests'],
    canCreate: ['guests'],
    canUpdate: ['guests'],
    canDelete: ['guests'],
    //canDelete: ['owners', 'admins'],
  },

  defaultInput: {
    orderBy: {
      name: 'asc',
    },
  },
});

export default Emails;
