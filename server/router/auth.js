import express from "express";
import "express-async-errors";
import { body } from "express-validator";
import * as authController from "../controller/auth.js";
import { isAuth } from "../middleware/auth.js";
import { validate } from "../middleware/validator.js";

const router = express.Router();

const validateCredential = [
  body("username")
    .trim()
    .isLength({ min: 4 })
    .withMessage("아이디는 4글자 이상이어야 합니다"),
  body("password")
    .trim()
    .isLength({ min: 4 })
    .withMessage("비밀번호는 4글자 이상이어야 합니다"),
  validate,
];

const validateSignup = [
  ...validateCredential,
  body('name').notEmpty().withMessage('이름을 입력해 주세요.'),
  body('email').isEmail().normalizeEmail().withMessage('유효하지 않은 이메일입니다.'),
  validate,
];

router.post("/signup", validateSignup, authController.signup);
router.post("/login", validateCredential, authController.login);
router.get("/me", isAuth, authController.me);

export default router;
