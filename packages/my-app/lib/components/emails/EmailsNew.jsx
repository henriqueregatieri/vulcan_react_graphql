import React from 'react';
import { Components } from 'meteor/vulcan:core';

import Emails from '../../modules/emails/collection.js';

// uncomment children on #Step14:
const EmailsNew = () => (
  <div className="emails-new">
    { <Components.SmartForm collection={Emails} mutationFragmentName="EmailFragment"/> }
  </div>
);

export default EmailsNew;
