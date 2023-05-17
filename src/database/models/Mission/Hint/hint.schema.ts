import { Schema } from 'mongoose';
import type { IHint } from './hint.types';

export const HintSchema = new Schema<IHint>({
  index: { type: Number },
  hint: { type: String },
  type: { type: String },
  title: { type: String },
  location: { x: { type: Number }, y: { type: Number } },
  image: { type: String },
});
