import { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";
import { AnyZodObject } from "zod";
export const schemaValition =
  (schema: AnyZodObject) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse({
        body:req.body,
        params:req.params,
        query:req.query
      });
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(500).json(
          error.issues.map((issue) => ({
            path:issue.path,
            message: issue.message,
          }))
        );
      }
      return res.status(400).json({
        messge: "internal server error",
      });
    }
  };
