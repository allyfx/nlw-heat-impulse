import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;

interface Payload {
  sub: string;
}

export function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authToken = request.headers.authorization;

  if (!authToken) {
    return response.status(401).json({
      errorCode: "token.missing",
    });
  }

  const [, token] = authToken.split(" ");

  try {
    const { sub } = verify(token, JWT_SECRET) as Payload;

    request.user_id = sub;

    return next();
  } catch (error) {
    return response.status(401).json({
      errorCode: "token.expired",
    });
  }
}
