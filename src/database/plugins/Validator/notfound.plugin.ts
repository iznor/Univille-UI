import findOrErrorPlugin from 'mongoose-find-or-error';
import mongoose from 'mongoose';

mongoose.plugin(findOrErrorPlugin, {
  getFindByIdError: (id, modelName) =>
    new Error(`Couldn't find ${modelName} by id ${id}`),
  getFindOneError: (query, modelName) =>
    new Error(`Couldn't find ${modelName}`),
});
