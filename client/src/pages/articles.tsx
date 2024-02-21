import { useCookies } from "react-cookie";
import { useState, useEffect } from "react";

import { parseJwt } from "../jwtDecode";
import { Grid, ArticleGrid } from "./components/grid";
import Navbar from "./components/navbar";
import { Listing } from "./components/listing";

import { getArticles } from "../api";

import "./article.css";

function Articles() {
  const [cookies, _] = useCookies(["user"]);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles(setArticles);
  }, []);

  const admin =
    (cookies.user && parseJwt(cookies.user)
      ? parseJwt(cookies.user).role
      : null) == 1;

  return (
    <Grid>
      <Navbar currentRoute="/news"></Navbar>
      {admin ? (
        <button
          onClick={() => {
            window.location.href = "/pg6301-2024-konte-Slenderman00/editor/new";
          }}
          className="newArticle"
        >
          New article
        </button>
      ) : (
        <></>
      )}
      <ArticleGrid>
        {articles.map((article: any, index: number) => {
          return (
            <Listing
              id={article.id}
              title={article.title}
              img={article.image}
              category={article.category}
              key={index}
            />
          );
        })}
      </ArticleGrid>
    </Grid>
  );
}

export default Articles;
