import { addRoute } from 'meteor/vulcan:core';

import EmailsList from '../components/emails/EmailsList';

addRoute({ name: 'emails', path: '/', component: EmailsList });
