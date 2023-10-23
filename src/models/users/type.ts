import { InferSchemaType } from "mongoose";
import { UserSchema } from "./users";

export type ISchemaUser = InferSchemaType<typeof UserSchema>;
