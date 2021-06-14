import { registerFragment } from 'meteor/vulcan:core';

registerFragment(/* GraphQL */ `
  fragment EmailFragment on Email {
    _id
    createdAt
    name
    subject
  }
`);
