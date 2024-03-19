import mongoose from 'mongoose';

const articleSchema = new mongoose.Schema(
  {
    blogTitle: {
      type: String,
      required: true,
    },
    headline: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Article = mongoose.model('Article', articleSchema);

export default Article;
