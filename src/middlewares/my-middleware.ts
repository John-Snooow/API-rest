import { Request, Response, NextFunction } from "express";

export function myMiddleware(
  request: Request,
  response: Response,
  next: Function
) {
  console.log("Middleware executado");
  return next(); 
}
