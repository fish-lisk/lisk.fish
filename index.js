// Set up environment variables
require('dotenv').config({ path: '.env' });
// eslint-disable-next-line global-require
if (process.env.NEW_RELIC_API_KEY) require('newrelic');

require('@lisk.fish/api');
require('@lisk.fish/client');
