import { Request, Response, NextFunction } from "express";
import { Error } from "../types";

export const globalErrorHandler = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(`\n${error.message}\n`);
  res
    .status(error.status || 500)
    .json({ message: "Oops, you got an error!", error: error.message });
};
