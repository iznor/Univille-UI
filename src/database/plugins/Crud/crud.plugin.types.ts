import { Model, Document } from 'mongoose';

export interface IPluginStatics {
  findOneByIdentity<T extends Document>(
    this: Model<T>,
    identity: string,
    caseSensitive?: boolean
  ): Promise<T>;

  removeByIdentity<T extends Document>(
    this: Model<T>,
    identity: string
  ): Promise<void>;

  filter<T extends Document>(
    this: Model<T>,
    entityObj: Record<string, any>
  ): Promise<T[]>;

  createOne<T extends Document>(this: Model<T>, entityObj: any): Promise<T>;

  editItem<T extends Document>(
    this: Model<T>,
    identity: string,
    itemInfo: any
  ): Promise<T>;

  removeFromArray<T extends Document>(
    this: Model<T>,
    identity: string,
    arrayPath: string,
    itemsId: any[]
  ): Promise<T>[] | Promise<T>;

  addToArray<T extends Document>(
    this: Model<T>,
    identity: string,
    arrayPath: string,
    itemsInfo: any[]
  ): Promise<T>[] | Promise<T>;

  editOneInArray<T extends Document>(
    this: Model<T>,
    identity: string,
    arrayPath: string,
    itemId: string,
    itemInfo: any
  ): Promise<T>;

  // findOneByIdentity: (
  //   this: Model<Document>,
  //   identity: string,
  //   caseSensitive?: boolean
  // ) => Promise<Document>;
  //
  // removeByIdentity: (
  //   this: Model<Document>,
  //   identity: string
  // ) => Promise<Document> | Promise<any>;
  //
  // filter: (
  //   this: Model<Document>,
  //   entityObj: any
  // ) => Promise<Document> | Promise<any>;
  //
  // createOne: (
  //   this: Model<Document>,
  //   entityObj: any
  // ) => Promise<Document> | Promise<any>;
  // editItem: (
  //   this: Model<Document>,
  //   identity: string,
  //   itemInfo: any
  // ) => Promise<Document> | Promise<any>;
  // removeFromArray: (
  //   this: Model<Document>,
  //   identity: string,
  //   arrayPath: string,
  //   itemsId: any[]
  // ) => Promise<Document<any, any, any>>[] | Promise<any>[] | Promise<any>;
  // addToArray: (
  //   this: Model<Document>,
  //   identity: string,
  //   arrayPath: string,
  //   itemsInfo: any[]
  // ) => Promise<Document<any, any, any>>[] | Promise<any>[] | Promise<any>;
  // editOneInArray: (
  //   this: Model<Document>,
  //   identity: string,
  //   arrayPath: string,
  //   itemId: string,
  //   itemInfo: any
  // ) => Promise<Document> | Promise<any>;
}
