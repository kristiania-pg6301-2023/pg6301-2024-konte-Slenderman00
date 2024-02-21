import { article } from "../models/article";

export function createArticle(
  title: String,
  content: String,
  category: String,
  imgurl: String,
  authorid: string,
  callback: any,
) {
  //unique article identifier
  const uaid = crypto.randomUUID();

  const a1 = new article({
    id: uaid,
    title: title,
    content: content,
    category: category,
    image: imgurl,
    author: authorid,
  });

  a1.save()
    .then((savedArticle) => {
      console.log("registered new user");
      //return a uaid we could use the title but i dont want to bother with edge cases from emoji use and such
      callback({ success: { uaid: uaid } });
    })
    .catch((err) => {
      //inform the user that 'Something went wrong'
      if (err.code == 11000) {
        callback({ error: "This article title has allready been used." });
      } else {
        callback({ error: "Something went wrong." });
      }
      console.log("failed saving new article");
    });
}

export function updateArticle(
  title: String,
  content: String,
  category: String,
  imgurl: String,
  articleid: string,
  callback: any,
) {
  article
    .updateOne(
      { id: articleid },
      {
        title: title,
        content: content,
        image: imgurl,
        category: category,
      },
    )
    .then((res) => {
      callback({ success: "updated article" });
    })
    .catch((err) => {
      callback({ error: "Something went wrong." });
    });
}
