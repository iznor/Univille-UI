import { Schema } from 'mongoose';
import type { ILocation } from './location.types';

export const LocationSchema = new Schema<ILocation>({
  lat: { type: Number, default: 32.067106 },
  lng: { type: Number, default: 34.825324 },
  address: { type: String, default: '' },
});
