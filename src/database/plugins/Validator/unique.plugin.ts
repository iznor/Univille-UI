import uniqueValidator from 'mongoose-unique-validator';
import mongoose from 'mongoose';

uniqueValidator.defaults.message =
  'Error, {VALUE} already exists, please try another one.';

mongoose.plugin(uniqueValidator);
