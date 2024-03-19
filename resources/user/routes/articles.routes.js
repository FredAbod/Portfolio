import express from "express";
import upload from "../../../utils/image/multer.js";
import {
  createArticle,
  getArticles,
} from "../controllers/articles.controllers.js";
const router = express.Router();

router.get("/get", getArticles);
router.post("/add", upload.single("image"), createArticle);

export default router;