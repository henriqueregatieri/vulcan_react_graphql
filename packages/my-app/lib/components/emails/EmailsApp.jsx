import React from 'react';
import { Components } from 'meteor/vulcan:core';
import Emails from '../../modules/emails/collection.js';

const EmailsApp = () => {
  return (
    <div className="app-content">
      <div className="emails-app">
        <Components.Datatable
          collection={Emails}
          columns={[
            'name',
            'subject',
          ]}
          options={{ input: { sort: { name: 'asc' } } }}
        />
      </div>
    </div>
  );
};

export default EmailsApp;
