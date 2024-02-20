import { Grid } from "./components/grid";
import Navbar from "./components/navbar";
import { ArticleText, ArticleTitle } from "./components/article";

import { useEffect, useState } from "react";
import { getArticle } from "../api";
import { useParams } from "react-router-dom";

import { AuthorSection } from "./components/authorSection";
import { RecommendedArticles } from "./components/recommendedArticles";


function Article() {
  const { id } = useParams();
  const [article, setArticle] = useState({ title: "", content: "", authorName: "", authorBio: "", authorImage: ""});

  useEffect(() => {
    getArticle(id as any, (result: any) => {
      setArticle(result);
    });
  }, []);

  return (
    <Grid>
      <Navbar currentRoute="/article"></Navbar>
      <ArticleTitle>{article.title}</ArticleTitle>
      <ArticleText>{article.content}</ArticleText>
      <AuthorSection name={article.authorName} bio={article.authorBio}  picture={article.authorImage}/>
      <RecommendedArticles/>
    </Grid>
  );
}

export default Article;
