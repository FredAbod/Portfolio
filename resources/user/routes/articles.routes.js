import express from "express";
import upload from "../../../utils/image/multer.js";
import {
  createArticle,
  getArticles,
  getArticlesById,
} from "../controllers/articles.controllers.js";
const router = express.Router();

router.get("/get", getArticles);
router.get("/getbyid/:id", getArticlesById);
router.post("/add", upload.single("image"), createArticle);

export default router;