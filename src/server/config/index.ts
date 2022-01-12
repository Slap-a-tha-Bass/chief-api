import * as dotenv from "dotenv";
import { DBClusterConfig } from "../types";

dotenv.config();

export const sqlConfig: DBClusterConfig = {
  auth: {
    database: process.env.DB_AUTH,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  },
};
export const jwtConfig = {
  secret: process.env.JWT_SECRET,
  expiration: process.env.JWT_EXPIRES,
};
