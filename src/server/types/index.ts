import { Request, Response, NextFunction } from "express";
import { ConnectionConfig, PoolClusterConfig, PoolConnection } from "mysql";

export interface MySQL_Response {
  insertId?: number;
  affectedRows?: number;
  message?: string;
}

export interface Error {
  message: string;
  status?: number;
}
export interface DBClusterConfig {
  [name: string]: ConnectionPoolConfig;
}
export interface Payload {
  id?: Users["id"];
  roles?: Users["roles"];
  isVerified?: Users["verified"];
  sms_enabled?: Users["sms_enabled"];
  sms_verified?: Users["sms_verified"];
  phone_number?: Users["phone_number"];
}
export interface Users {
  id?: string;
  username?: string;
  email?: string;
  password?: string; // Not in DB table, just used for login & registration routes
  hashed?: string;
  roles?: string; // JSON stringified array of strings
  avatar?: string;
  visible?: number;
  verified?: number;
  _created?: string;
  _updated?: string;
  sms_enabled?: number;
  sms_verified?: number;
  phone_number?: string;
}
export interface ReqUser extends Request {
  user?: Payload;
}
export interface Tokens {
  id: string;
  user_id: string;
  _created: number;
  _updated: number;
}
export interface ConnectionPoolConfig {
  database: string;
  host: string;
  user: string;
  password: string;
}
