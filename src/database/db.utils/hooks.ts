import type { Document } from 'mongoose';

export async function preSave<T>(this: Document<T>) {
  if (this.isNew) {
    this.id = this._id;
  }
}
