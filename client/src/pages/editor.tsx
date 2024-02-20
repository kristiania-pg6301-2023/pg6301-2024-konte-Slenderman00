import { Grid } from "./components/grid";
import Navbar from "./components/navbar";
import { useState } from "react";
import { useParams } from "react-router-dom";

import {
  ArticleTitleInput,
  ArticleCategoryInput,
  ArticleTextInput,
  ArticleCategorySubmit,
} from "./components/inputs";

function Editor() {
  const { id } = useParams();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');

  return (
    <Grid>
      <Navbar currentRoute="/editor"></Navbar>
      <ArticleTitleInput callback={(value: string) => {setTitle(value)}}/>
      <ArticleTextInput callback={(value: string) => {setContent(value)}}/>
      <ArticleCategoryInput callback={(value: string) => {setCategory(value)}}>
        <option value='Conspiracy Theories'>Conspiracy Theories</option>
        <option value='Flat Earth Evidence'>Flat Earth Evidence</option>
        <option value='Scientific Debate'>Scientific Debate</option>
        <option value='Community Events & Meetups'>Community Events & Meetups</option>
        <option value='Astronomy and Observations'>Astronomy and Observations</option>
        <option value='Flat Earth Models and Geometry'>Flat Earth Models and Geometry</option>
        <option value='Interviews with Influential Figures'>Interviews with Influential Figures</option>
        <option value='Challenges to Mainstream Science'>Challenges to Mainstream Science</option>
        <option value='Historical Perspectives on Geography'>Historical Perspectives on Geography</option>
        <option value='International Flat Earth Community News'>International Flat Earth Community News</option>
      </ArticleCategoryInput>
      <ArticleTitleInput callback={(value: string) => {setImage(value)}}/>
      <ArticleCategorySubmit callback={() => {
        console.log(title, content, category)
      }}/>
    </Grid>
  );
}

export default Editor;
