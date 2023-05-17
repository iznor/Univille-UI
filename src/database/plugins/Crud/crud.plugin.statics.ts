import { identityQuery } from '../../db.utils';
import { IPluginStatics } from './crud.plugin.types';

export const pluginStatics: IPluginStatics = {
  async findOneByIdentity(this, identity, caseSensitive = false) {
    const entity = await this.findOne(identityQuery(identity, caseSensitive));
    if (!entity) throw new Error(`Cant find this entity by ${identity} `);
    return entity;
  },
  async removeByIdentity(this, identity) {
    const entity = await this.findOne(identityQuery(identity, false));
    await entity.remove();
  },
  async filter(this, entityObj) {
    return this.find(entityObj);
  },
  async createOne(this, entityObj) {
    const newPlugin = new this(entityObj);
    newPlugin.id = newPlugin._id;
    return newPlugin.save();
  },
  async editItem(this, identity, itemInfo) {
    const entity = await this.findOne(identityQuery(identity, false));
    Object.assign(entity, itemInfo);
    return entity.save();
  },
  async removeFromArray(this, identity, arrayPath, itemsId) {
    const entity = await this.findOne(identityQuery(identity, false));
    entity[arrayPath] = entity[arrayPath].filter(
      (item) => !itemsId.includes(item.id)
    );
    await entity.save();
    return entity[arrayPath];
  },
  async addToArray(this, identity, arrayPath, itemsInfo) {
    const entity = await this.findOne(identityQuery(identity, false));
    entity[arrayPath].push(...itemsInfo);
    await entity.save();
    return entity[arrayPath];
  },

  async editOneInArray(this, arrayPath, identity, itemId, itemInfo) {
    const entity = await this.findOne(identityQuery(identity, false));
    const item = entity[arrayPath].find((i) => i.id === itemId);
    if (!item) throw new Error('Cant find this item');
    Object.assign(item, itemInfo);
    return entity.save();
  },
};
