import express from "express";
import { createPortfolio, portfolio } from "../controllers/user.controllers.js";
import upload from "../../../utils/image/multer.js";
const router = express.Router();


router.get('/get', portfolio)
router.post('/add', upload.single("icon"), createPortfolio);


export default router;