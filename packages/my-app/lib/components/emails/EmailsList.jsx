import React from 'react';
import get from 'lodash/get';
import { Components, useMulti2 } from 'meteor/vulcan:core';

import Emails from '../../modules/emails/collection.js';

import EmailsNew from './EmailsNew';
import EmailsApp from './EmailsApp';

const EmailsList = () => {
  const items = {};

  const useMulti2Object = useMulti2({
    collection: Emails,
    fragmentName: 'EmailFragment',
  });
  items.loading = useMulti2Object.loading;
  items.results = get(useMulti2Object, 'data.emails.results');

  return (
    <div className="movies-list">
      <h2>New</h2>
      <EmailsNew />
      <h2>List</h2>
      <EmailsApp />


      {/* <div className="movies-contents">
        {items.loading ? (
          <Components.Loading />
        ) : (
          items.results && (
            <ul>
              {items.results.map((email) => (
                <li key={email.name}>
                  <h4>{email.name}</h4>
                  {email.subject && <p>{email.subject}</p>}
                </li>
              ))}
            </ul>
          )
        )}
      </div> */}

    </div>
  );
};

export default EmailsList;
