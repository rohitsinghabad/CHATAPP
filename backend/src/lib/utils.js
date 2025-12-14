import jwt from "jsonwebtoken";
import { ENV } from "../lib/env.js";

export const generateToken = (userId, res) => {
  if (!ENV.JWT_SECRET) {
    throw new Error("JWT_SECRET is not configured");
  }

  const token = jwt.sign({ userId }, ENV.JWT_SECRET, {
    expiresIn: "7d",
  });

  res.cookie("jwt", token, {
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,       // prevents XSS
    secure: true,         // REQUIRED for HTTPS (Render/Vercel)
    sameSite: "none",     // 🔥 REQUIRED for cross-domain cookies
  });

  return token;
};
