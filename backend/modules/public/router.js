import express from 'express';
import publicController from "./controller.js";

const router = express.Router();

router.get("/", publicController.homePage);
router.get("/about", publicController.aboutUsPage);

export default router;