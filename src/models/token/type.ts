import { InferSchemaType } from 'mongoose';
import { UserToken } from './token';

export type ISchemaRefreshTokenUser = InferSchemaType<typeof UserToken>;
