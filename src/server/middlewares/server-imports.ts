import * as express from "express";
import * as passport from "passport";
import * as morgan from "morgan";
import * as compression from "compression";
import * as cors from "cors";
const helmet = require("helmet");

export const serverImports = (app: express.Application) => {
  app.use(express.json());
  app.use(passport.initialize());
  app.use(morgan("dev"));
  app.use(compression());
  app.use(cors());
  app.use(helmet() as express.RequestHandler);
};
