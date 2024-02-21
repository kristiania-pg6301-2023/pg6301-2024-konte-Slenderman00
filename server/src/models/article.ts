import mongoose from "mongoose";
import { user } from "./user";
import { getUserByUUID } from "./user";

const articleSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
      unique: true,
      min: 3,
      max: 100,
    },
    content: {
      type: String,
    },
    category: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      default: "https://placehold.jp/150x150.png",
    },
    author: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

export const article = mongoose.model("article", articleSchema);

export function getArticles() {
  return article
    .find()
    .sort({ createdAt: -1 })
    .then((articles: any) => {
      //(This replaces the author id with the author name)
      const authorPromises = articles.map((article: any) => {
        return getUserByUUID(article.author).then((result: any) => {
          const updatedArticle = {
            id: article.id,
            title: article.title,
            image: article.image,
            category: article.category,
            authorName: result.name,
          };
          return updatedArticle;
        });
      });

      //wait for all author promises to resolve
      return Promise.all(authorPromises).then((updatedArticles) => {
        return updatedArticles;
      });
    })
    .catch((error) => {
      throw error;
    });
}

export function getArticle(id: string) {
  return article
    .findOne({ id: id })
    .then((article: any) => {
      if (!article) {
        //handle case where article is not found
        throw new Error("Article not found");
      }

      //fetch author details for the article
      return getUserByUUID(article.author)
        .then((result: any) => {
          const updatedArticle = {
            id: article.id,
            title: article.title,
            image: article.image,
            content: article.content,
            category: article.category,
            authorName: result.name,
            authorImage: result.picture,
            authorBio: result.bio,
          };
          return updatedArticle;
        })
        .catch((error) => {
          throw error;
        });
    })
    .catch((error) => {
      throw error;
    });
}
