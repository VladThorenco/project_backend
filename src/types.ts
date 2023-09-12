import { Request } from "express";

export type RequestBody<T> = Request<{}, {}, T>

export interface RequestQuery<T> extends Request {
  P: {},
  ResBody: {},
  ReqBody: {},
  ReqQuery: T,
}

export interface RequestParams<T> extends Request<T> {}
