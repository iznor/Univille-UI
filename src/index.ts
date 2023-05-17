import * as dotenv from 'dotenv-flow';

dotenv.config({ path: `${__dirname}/..` });
require('./database');

setTimeout(() => {
  require('./server');
}, 2000);
