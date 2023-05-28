import { NextFunction, Request, Response } from 'express';

declare module 'express' {
  interface Request<P, ResBody, ReqBody, ReqQuery, Locals> {
    body: ReqBody;
    params: ReqQuery;
  }

  interface Response<
    ResBody = any,
    Locals extends Record<string, any> = Record<string, any>,
    StatusCode extends number = number
  > {
    status(code: StatusCode): this;
    sendFile(path: string): this;

    json: (res: ResBody) => any;
  }
}

declare global {
  type IControlFn<Tbody = any, Tparams = any> = (
    req: Request<never, never, Tbody, Tparams>,
    res: Response,
    next: NextFunction
  ) => Promise<void>;

  interface IGameMeta {
    name: string;
    duration: number;
    groupCount: number;
    colors: IGroupColor[];
    code: string[];
    startTime: number;
  }
  interface IGameParams {
    teacherId: string;
    className: string;
    missions: Partial<IMission>[];
    metadata: Partial<IGameMeta>;
  }

  export interface IMission {
    name: string;
    description: string;
    hint: { text: string; image?: string; title?: string };
    target: { objectTag: string; image?: string; title?: string };
    image: string;
    score: number;
  }
  interface IGroupColor {
    name: string;
    hex: string;
    heb: string;
  }
}

export {};
