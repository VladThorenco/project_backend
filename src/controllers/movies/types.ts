import { Request, Response } from "express";
import { RequestParams } from "../../types";

type TID = {
  id: string
}

type TMovies<T> = (_req: Request, res: Response<T[]>) => Promise<Response<T[]>>
type TMovieById<T> = (req: RequestParams<TID>, res: Response<T>) => Promise<Response<T>>
type TRemoveMovieById<T> = (req: RequestParams<TID>, res: Response<T>) => Promise<Response<T>>

export interface IMoviesController<T> {
  getMovies: TMovies<T>
  getMovieById: TMovieById<T>
  removeMovieById: TRemoveMovieById<T>
}
