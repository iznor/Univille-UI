import mongoose, { Document, Schema } from 'mongoose';
import { pluginStatics } from './crud.plugin.statics';
import { IPluginStatics } from './crud.plugin.types';

export interface IPluginDocument extends Document {
  _id: string;
  id: string;
}

export function crudPlugin<T extends IPluginDocument>(schema: Schema<T>): void {
  schema.pre<T>('save', function (next) {
    // Your pre-save logic goes here
    this.id = this._id;
    // console.log('Pre-save hook executed!');
    next();
  });

  // Add static methods to all models using Object.assign
  Object.assign(schema.statics, pluginStatics);

  // Set the toJSON option to include getters on all schemas
  schema.set('toJSON', { getters: true });
}

declare module 'mongoose' {
  interface Model<T extends Document> extends IPluginStatics {}
}
mongoose.plugin(crudPlugin);
