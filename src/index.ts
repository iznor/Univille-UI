import * as dotenv from 'dotenv-flow';
import mongoose from "mongoose";
mongoose.plugin(require('mongoose-autopopulate'));
dotenv.config({ path: `${__dirname}/..` });
require('./database');

setTimeout(() => {
  require('./server');
}, 2000);
