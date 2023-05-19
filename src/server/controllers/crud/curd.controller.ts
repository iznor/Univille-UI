import { BaseModel, Models } from '../../../database';

import { ICrudController } from './crud.controller.types';

export class CurdController<T extends BaseModel> implements ICrudController<T> {
  protected model: T;

  protected models: Models;

  constructor(model) {
    this.model = model;
  }

  async filter(req, res, next) {
    try {
      const entities = await this.model.filter(req.body);
      res.status(200).json({ message: 'success', data: entities });
    } catch (e) {
      next(e);
    }
  }

  async create(req, res, next) {
    try {
      const entity = await this.model.createOne(req.body);
      res.status(200).json({ message: 'success', data: entity });
    } catch (e) {
      next(e);
    }
  }

  async edit(req, res, next) {
    try {
      const updatedEntity = await this.model.editItem(req.params.id, req.body);
      res.status(200).json({ message: 'success', data: updatedEntity });
    } catch (e) {
      next(e);
    }
  }

  async delete(req, res, next) {
    try {
      await this.model.removeByIdentity(req.params.id);
    } catch (e) {
      next(e);
    }
  }
}
