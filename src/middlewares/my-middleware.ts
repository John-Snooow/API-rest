import { Request, Response, NextFunction } from "express";

export function myMiddleware(
  request: Request,
  response: Response,
  next: Function
) {
  request.user_id = "123456"

  console.log("Middleware executado");
  return next(); 
}
