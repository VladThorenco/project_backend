import { InferSchemaType } from 'mongoose';
import { moviesSchema } from './movies';

export type ISchemaMovies = InferSchemaType<typeof moviesSchema>;
