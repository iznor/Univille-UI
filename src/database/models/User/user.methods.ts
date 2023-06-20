/** ****************************************
 *              METHODS
 ***************************************** */

import type { IUserStaticMethods, IUserInstanceMethods } from './user.types';
import { identityQuery } from '../../db.utils';

export const userMethods: IUserInstanceMethods = {
  editInfo(this, userInfo) {
    Object.assign(this, userInfo);
    return this.save();
  },
};

/** ****************************************
 *              STATICS
 ***************************************** */

export const userStatics: IUserStaticMethods = {
  async findOneByIdentity(this, identity, caseSensitive = false) {
    const player = await this.findOne(identityQuery(identity, caseSensitive));
    if (!player) throw new Error('Cant find this player');
    return player;
  },
};
