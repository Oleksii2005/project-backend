import express from "express";
import userController from "../../controllers/user-controllers.js";
import { upload, authenticate, isEmptyBody } from "../../middlewares/index.js";
import { validateBody } from "../../decorators/index.js";

const router = express.Router();

router.post("/add-avatar", upload.single("avatar"), userController.addAvatar);
router.get("/current", authenticate, userController.getCurrent);
router.patch("/avatars", authenticate, upload.single("avatar"), userController.updateUserData);

export default router;
