const ENDPOINT = "https://the-flat-earther-tribune-e93e502a5a83.herokuapp.com"; //"http://localhost:3000";

function postData(path: string, data: any, callback: any) {
  fetch(`${ENDPOINT}${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    credentials: "include",
  })
    .then((result: any) => {
      result.json().then((result: any) => {
        callback(result);
      });
    })
    .catch((err: any) => {
      callback(err);
    });
}

function getData(path: string, callback: any) {
  fetch(`${ENDPOINT}${path}`, {
    credentials: "include",
  })
    .then((result: any) => {
      result.json().then((result: any) => {
        callback(result);
      });
    })
    .catch((err: any) => {
      callback(err);
    });
}

export function doLogin(username: string, password: string, callback: any) {
  postData(
    "/api/login",
    { username: username, password: password },
    (result: any) => {
      callback(result);
    }
  );
}

export function doRegister(username: string, password: string, callback: any) {
  postData(
    "/api/register",
    { username: username, password: password },
    (result: any) => {
      callback(result);
    }
  );
}

export function createNewArticle(
  title: string,
  content: string,
  category: string,
  imgurl: string,
  callback: any
) {
  postData(
    "/api/article/create",
    { title: title, content: content, category: category, imgurl: imgurl },
    (result: any) => {
      callback(result);
    }
  );
}

export function updateArticle(
  title: string,
  content: string,
  category: string,
  imgurl: string,
  id: string,
  callback: any
) {
  postData(
    "/api/article/update",
    {
      title: title,
      content: content,
      category: category,
      imgurl: imgurl,
      id: id,
    },
    (result: any) => {
      callback(result);
    }
  );
}

export function getArticles(callback: any) {
  getData("/api/articles", (result: any) => {
    callback(result);
  });
}

export function getArticle(id: string, callback: any) {
  getData(`/api/article/id/${id}`, (result: any) => {
    callback(result);
  });
}

export function getProfileData(callback: any) {
    getData("/api/profile", (result: any) => {
        callback(result);
    });
}

export function updateProfileData(bio: string, picture: string, callback: any) {
    postData("/api/profile/update", {bio: bio, picture: picture}, (result: any) => {
        callback(result);
    });
}
