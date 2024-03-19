import Portfolio from "../models/portfolio.js";
import cloudinary from "../../../utils/image/cloudinary.js"


export const createPortfolio = async (req,res) => {
    try {
        const { title, content, github } = req.body;
        const result = await cloudinary.v2.uploader.upload(req.file.path);

        if (!title && content && !github) {
            return errorResMsg(res, 400, "Email is required");
          }

            const newPortfolio = new Portfolio({
                title,
                content,
                github,
                icon: result.secure_url,
            })

            const portfolio = await newPortfolio.save();
            res.status(201).json({
                success: true,
                portfolio: portfolio,
                message: "Portfolio created successfully",
              });
    } catch (error) {
        console.error(error);
        res.status(500).json({
          error: error.message,
          message: "Internal server error",
        });
      }};

     export const portfolio = async (req, res) => {
        try {
          const portfolios = await Portfolio.find();
          res.status(200).json({
            success: true,
            portfolios: portfolios,
            message: "Portfolios retrieved successfully",
          });
        } catch (error) {
          console.error(error);
          res.status(500).json({
            error: error.message,
            message: "Internal server error",
          });
        }
      };