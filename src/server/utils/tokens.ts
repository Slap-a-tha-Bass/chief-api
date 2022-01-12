import * as jwt from "jsonwebtoken";
import { Payload } from "../types";
import { jwtConfig } from "../config";

export const createToken = async (payload: Payload) => {
    const token = jwt.sign(payload, jwtConfig.secret, { expiresIn: jwtConfig.expiration });
    return token;
};

