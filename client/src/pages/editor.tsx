import { Grid } from "./components/grid";
import Navbar from "./components/navbar";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import {
  ArticleTitleInput,
  ArticleCategoryInput,
  ArticleTextInput,
  ArticleSubmit,
} from "./components/inputs";

import { createNewArticle, getArticle, updateArticle } from "../api";

function Editor() {
  const { id } = useParams();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("Conspiracy Theories");
  const [image, setImage] = useState("");

  useEffect(() => {
    if (id != "new") {
      getArticle(id as string, (result: any) => {
        setTitle(result.title);
        setContent(result.content);
        setCategory(result.category);
        setImage(result.image);
      });
    }
  }, []);
  return (
    <Grid>
      <Navbar currentRoute="/editor"></Navbar>
      <ArticleTitleInput
        value={title}
        callback={(value: string) => {
          setTitle(value);
        }}
      />
      <ArticleTextInput
        value={content}
        callback={(value: string) => {
          setContent(value);
        }}
      />
      <ArticleCategoryInput
        value={category}
        callback={(value: string) => {
          setCategory(value);
        }}
      >
        <option value="Conspiracy Theories">Conspiracy Theories</option>
        <option value="Flat Earth Evidence">Flat Earth Evidence</option>
        <option value="Scientific Debate">Scientific Debate</option>
        <option value="Community Events & Meetups">
          Community Events & Meetups
        </option>
        <option value="Astronomy and Observations">
          Astronomy and Observations
        </option>
        <option value="Flat Earth Models and Geometry">
          Flat Earth Models and Geometry
        </option>
        <option value="Interviews with Influential Figures">
          Interviews with Influential Figures
        </option>
        <option value="Challenges to Mainstream Science">
          Challenges to Mainstream Science
        </option>
        <option value="Historical Perspectives on Geography">
          Historical Perspectives on Geography
        </option>
        <option value="International Flat Earth Community News">
          International Flat Earth Community News
        </option>
      </ArticleCategoryInput>
      <ArticleTitleInput
        value={image}
        callback={(value: string) => {
          setImage(value);
        }}
      />
      <ArticleSubmit
        callback={() => {
          if (id == "new") {
            createNewArticle(title, content, category, image, (result: any) => {
              console.log(result);
              if ("success" in result) {
                document.location.href = `/pg6301-2024-konte-Slenderman00/article/${result.success.uaid}`;
              } else {
                alert(result.error);
              }
            });
          } else {
            updateArticle(
              title,
              content,
              category,
              image,
              id as any,
              (result: any) => {
                if ("success" in result) {
                  document.location.href = `/pg6301-2024-konte-Slenderman00/article/${id}`;
                } else {
                  alert(result.error);
                }
              },
            );
          }
        }}
      />
    </Grid>
  );
}

export default Editor;
