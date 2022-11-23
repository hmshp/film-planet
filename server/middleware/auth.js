import jwt from "jsonwebtoken";
import { config } from "../config.js";

const AUTH_ERROR = { message: "Authentication error" };

export const isAuth = async (req, res, next) => {
  const authHeader = req.get("Authorization");
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json(AUTH_ERROR);
  }
  const token = authHeader.split(" ")[1];

  jwt.verify(token, config.jwt.secretKey, async (error, decoded) => {
    if (error) {
      return res.status(401).json(AUTH_ERROR);
    }
    const userId = decoded.id;
    // req에 userId를 추가해 준다
    req.body.userId = userId;
    next();
  });
};
