import type { Document, Model } from 'mongoose';
import type { IHint } from './Hint';
import type { ITarget } from './Target';

export interface IMission {
  index: number;
  name: string;
  description: string;
  image: string;
  target: ITarget;
  hint: IHint;
  hints: IHint[];
  score: number;
  scoreRatio: number;
}

export interface IMissionDocument
  extends IMission,
    Document,
    IMissionInstanceMethods {}

export interface IMissionInstanceMethods {
  edit: (
    this: IMissionDocument,
    missionInfo: Partial<IMission>
  ) => Promise<IMissionDocument>;
  addHint: (this: IMissionDocument, hint: IHint) => Promise<IMissionDocument>;
  removeHint: (
    this: IMissionDocument,
    hintId: string
  ) => Promise<IMissionDocument>;
  editHint: (
    this: IMissionDocument,
    hintId: string,
    hintInfo: IHint
  ) => Promise<IMissionDocument>;
  addTarget: (
    this: IMissionDocument,
    target: ITarget
  ) => Promise<IMissionDocument>;
  editTarget: (
    this: IMissionDocument,
    target: ITarget
  ) => Promise<IMissionDocument>;
}

export interface IMissionStaticMethods {
  // findOneByIdentity: (
  //   identity: string /** username,id,fullName */,
  //   caseSensitive?: boolean
  // ) => Promise<IMissionDocument>;
  filterMissions: (
    missionObj: Partial<IMission>
  ) => Promise<IMissionDocument[]>;
  createMission: (
    this: IMissionModel,
    missionObj: Partial<IMissionDocument>
  ) => Promise<IMissionDocument>;
  createMissions: (
    this: IMissionModel,
    missionsObj: Partial<IMission>[]
  ) => Promise<IMissionDocument[]>;
  updateMission: (
    this: IMissionModel,
    missionId: string,
    missionsObj: Partial<IMission>[]
  ) => Promise<IMissionDocument>;
  deleteMission: (identity: string) => Promise<any>;
}

export interface IMissionModel
  extends Model<IMissionDocument>,
    IMissionStaticMethods {}
