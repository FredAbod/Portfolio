import Article from "../models/articles.js";
import cloudinary from "../../../utils/image/cloudinary.js"


// Controller for creating a new article
export const createArticle = async (req, res) => {
  try {
    const { blogTitle, headline, content } = req.body;
    const result = await cloudinary.v2.uploader.upload(req.file.path);

    if (!blogTitle || !headline || !content) {
      return res.status(400).json({ success: false, message: "Missing required fields" });
    }

    const newArticle = new Article({
      blogTitle,
      headline,
      content,
      image: result.secure_url,
    });

    const article = await newArticle.save();
    res.status(201).json({
      success: true,
      article: article,
      message: "Article created successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: error.message,
      message: "Internal server error",
    });
  }
};

// Controller for retrieving all articles
export const getArticles = async (req, res) => {
  try {
    const articles = await Article.find();
    res.status(200).json({
      success: true,
      articles: articles,
      message: "Articles retrieved successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: error.message,
      message: "Internal server error",
    });
  }
};
