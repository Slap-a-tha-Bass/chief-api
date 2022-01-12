import * as express from "express";
import { globalErrorHandler } from "./global-error-handler";
import { Error } from "../types";
import routes from "../routes";

export const routesHandler = (app: express.Application) => {
  app.use(routes);

  app.use("*", (req, res, next) => {
    const invalidPath: Error = new Error(
      `${req.originalUrl} is not a valid path.`
    );
    invalidPath.status = 404;
    next(invalidPath);
  });
  app.use(globalErrorHandler);
};
