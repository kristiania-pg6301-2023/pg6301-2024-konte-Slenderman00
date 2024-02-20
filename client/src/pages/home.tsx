import { Grid } from "./components/grid";
import Navbar from "./components/navbar";
import { ArticleText, ArticleTitle } from "./components/article";
import { RecommendedArticles } from "./components/recommendedArticles";

function Home() {
  return (
    <Grid>
      <Navbar currentRoute="/"></Navbar>
      <ArticleTitle>Welcome</ArticleTitle>
      <ArticleText>
        Greetings, esteemed readers! Welcome to the Flat Earther Tribune, your
        go-to source for all things flat earth! As we embark on a journey
        through centuries of history and beliefs surrounding our beloved flat
        planet, allow us to present an overview of our mission and what you can
        expect from this enlightening publication.
        <br />
        <br />
        The concept of a flat Earth has been prevalent throughout human
        civilization since ancient times. From the Mesopotamians to the
        Egyptians, countless cultures have shared this belief due to their
        observation of the horizon and the appearance of celestial bodies. As
        time progressed, scientists like Aristotle and Galileo proposed the idea
        of a spherical Earth, but many still clung onto the flat Earth model
        despite mounting evidence against it.
        <br />
        <br />
        In modern times, there has been a resurgence in interest regarding flat
        Earth theory due to increased accessibility to information through
        social media platforms and online communities dedicated to questioning
        mainstream science. The Flat Earther Tribune aims to provide an unbiased
        platform where individuals can share their perspectives on the subject
        matter, engage in constructive debates, and explore alternative
        interpretations of our world.
        <br />
        <br />
        Throughout this publication, you will encounter various articles
        covering topics such as flat Earth proofs, famous historical figures who
        believed in a flat Earth, and even discussions on how modern technology
        may have influenced our perception of the planet's shape. We invite you
        to join us on this intellectual adventure, where curiosity knows no
        bounds, and open-mindedness is key to understanding different
        perspectives.
        <br />
        <br />
        So buckle up, dear readers, for an exhilarating ride through history as
        we delve into the fascinating world of flat Earth beliefs! Remember,
        every great journey begins with a single step – or in this case, a leap
        of faith!
        <br />
        <br />
        Stay tuned for more riveting content from your friends at the Flat
        Earther Tribune! Don't forget to share your thoughts and experiences
        with us on social media using <b>#FlatEarthFanatic</b>. And lastly, keep
        an open mind as you explore the many facets of our flat world!
      </ArticleText>
      <RecommendedArticles />
    </Grid>
  );
}

export default Home;
