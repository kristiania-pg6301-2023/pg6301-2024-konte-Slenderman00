import { useCookies } from "react-cookie";

import { parseJwt } from "../jwtDecode";
import { Grid, ArticleGrid } from "./components/grid";
import Navbar from "./components/navbar";
import { Listing } from "./components/listing";

import "./article.css";

function Articles() {
  const [cookies, _] = useCookies(["user"]);

  const admin =
    (cookies.user && parseJwt(cookies.user)
      ? parseJwt(cookies.user).role
      : null) == 1;

  return (
    <Grid>
      <Navbar currentRoute="/news"></Navbar>
      {admin ? (
        <></>
      ) : (
        <button
          onClick={() => {
            window.location.href = "/editor/new";
          }}
          className="newArticle"
        >
          New article
        </button>
      )}
      <ArticleGrid>
        <Listing title="YEET" img="https://placehold.jp/250x150.png" />
        <Listing
          title="The Flat Earth Tribune is good"
          img="https://placehold.jp/220x150.png"
        />
        <Listing title="SKEET" img="https://placehold.jp/250x150.png" />
        <Listing title="YEET" img="https://placehold.jp/250x150.png" />
        <Listing
          title="The Flat Earth Tribune is good"
          img="https://placehold.jp/100x150.png"
        />
        <Listing title="SKEET" img="https://placehold.jp/250x150.png" />
        <Listing title="YEET" img="https://placehold.jp/250x150.png" />
        <Listing
          title="The Flat Earth Tribune is good"
          img="https://placehold.jp/250x200.png"
        />
        <Listing title="SKEET" img="https://placehold.jp/250x150.png" />
        <Listing
          title="The Flat Earth Tribune is good"
          img="https://placehold.jp/250x150.png"
        />
        <Listing title="YEET" img="https://placehold.jp/250x150.png" />
        <Listing
          title="The Flat Earth Tribune is good"
          img="https://placehold.jp/250x150.png"
        />
        <Listing title="SKEET" img="https://placehold.jp/250x150.png" />
        <Listing title="YEET" img="https://placehold.jp/250x150.png" />
        <Listing
          title="The Flat Earth Tribune is good"
          img="https://placehold.jp/400x150.png"
        />
        <Listing title="SKEET" img="https://placehold.jp/250x150.png" />
        <Listing title="YEET" img="https://placehold.jp/250x150.png" />
        <Listing
          title="The Flat Earth Tribune is good"
          img="https://placehold.jp/250x150.png"
        />
        <Listing title="SKEET" img="https://placehold.jp/250x150.png" />
      </ArticleGrid>
    </Grid>
  );
}

export default Articles;
