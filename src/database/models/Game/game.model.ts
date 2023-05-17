import { model } from 'mongoose';
import type { IGameModel, IGameDocument } from './game.types';
import { GameSchema } from './game.schema';

export const GameModel = model<IGameDocument, IGameModel>('Game', GameSchema);
