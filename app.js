import express from "express";
const app = express();
import portfolioRouter from '../src/resources/user/routes/user.routes.js'
import articlesRouter from '../src/resources/user/routes/articles.routes.js'
import dotenv from "dotenv"
import cors from "cors"


dotenv.config();
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Welcome to My Portfolio 💵💵💵 ");
});

app.use('/api/portfolio', portfolioRouter);
app.use('/api/articles', articlesRouter);

export default app;