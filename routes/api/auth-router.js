import express from "express";
import isEmptyBody from "../../middlewares/isEmptyBody.js";
import authController from "../../controllers/auth-controllers.js";
import User from "../../models/User.js";
import validateBodyAuth from "../../middlewares/validateBodyAuth.js";
import authenticate from "../../middlewares/authenticate.js";

const router = express.Router();

router.post(
  "/signup",
  isEmptyBody,
  validateBodyAuth(User.userSignUpSchema),
  authController.signUp
);

router.post(
  "/signin",
  isEmptyBody,
  validateBodyAuth(User.userSignInSchema),
  authController.signIn
);

router.post("/logout", authenticate, authController.logout);

export default router;
