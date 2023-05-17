import { identityQuery } from '../../db.utils';
import {
  IAchievementInstanceMethods,
  IAchievementStaticMethods,
} from './achievement.types';

export const methods: IAchievementInstanceMethods = {
  async editInfo(this, achievementInfo) {
    Object.assign(this, achievementInfo);
    return this.save();
  },
};

export const statics: IAchievementStaticMethods = {};
