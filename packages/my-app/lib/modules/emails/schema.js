const schema = {
  // default properties

  _id: {
    type: String,
    optional: true,
    canRead: ['guests'],
  },
  createdAt: {
    type: Date,
    optional: true,
    canRead: ['guests'],
    onCreate: () => {
      return new Date();
    },
  },
  /*
  userId: {
    type: String,
    optional: true,
    canRead: ['guests'],
    resolveAs: {
      fieldName: 'user',
      type: 'User',
      relation: 'hasOne',
    },
  },
  */

  // custom properties

  name: {
    label: 'Name',
    type: String,
    optional: true,
    searchable: true,
    canRead: ['guests'],
    canCreate: ['guests'],
    canUpdate: ['guests'],
  },
  subject: {
    label: 'Subject',
    type: String,
    optional: true,
    searchable: true,
    canRead: ['guests'],
    canCreate: ['guests'],
    canUpdate: ['guests'],
  },
};

export default schema;
