import { ArticleGrid } from "./grid";
import { Listing } from "./listing";
import { useState, useEffect } from "react";

import { getArticles } from "../../api";

export function RecommendedArticles() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles((result: any) => {
      let res = result.sort(() => Math.random() - 0.5);
      setArticles(res.slice(0, 3));
    });
  }, []);

  return (
      <ArticleGrid>
        {articles.map((article: any, index: number) => {
          return (
            <Listing
              id={article.id}
              title={article.title}
              img={article.image}
              key={index}
            />
          );
        })}
      </ArticleGrid>
  );
}
