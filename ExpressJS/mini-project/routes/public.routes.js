import { Router } from "express";
import { generateToken } from "../utils/token-utils.js";

const router = Router();

router.get("/generate-token", (req, res) => {
  const token = generateToken();
  res.status(200).json({
    message: "Token generated please save it for the future use",
    data: token,
  });
});

router.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to home page",
  });
});

export default router;
