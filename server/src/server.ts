import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import mongoose from "mongoose";

import registerUser from "./secureUserSystem/register";
import loginUser from "./secureUserSystem/login";

import { createArticle, updateArticle } from "./goodArticleSystem/article";

import { cookieMan } from "./secureUserSystem/cookieMan";
import { getArticles, getArticle } from "./models/article";
import { getUserByUUID } from "./models/user";
import { updateUser } from "./secureUserSystem/update";

var cors = require('cors');

const path = require('path')

dotenv.config({path: path.resolve(__dirname, '../../secret.env')})

mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_ADDRESS}`);
const db = mongoose.connection;

const app = express()
const port = process.env.PORT || 3000;

//middleware must be asserted before the routes.
app.use(cookieParser());
app.use(express.json());

//this will allow all origins, it is fine for this website.
const corsOptions = {
    credentials: true,
    origin: (origin: any, callback: any) => {
        callback(null, true);
    }
};

app.use(cors(corsOptions));

app.get('/', (req, res) => {
    res.send("hello world");
})

const apiRouter = express.Router();

apiRouter.get('/', (req, res) => {
    res.send("this is api home");
})

const loginRouter = express.Router();
loginRouter.post('/', (req, res) => {
    if("username" in req.body && "password" in req.body) {
        loginUser(req.body.username, req.body.password, (result: any) => {
            res.send(result);
        })
    }
});

const registerRouter = express.Router();
registerRouter.post('/', (req, res) => {
    if("username" in req.body && "password" in req.body) {
        //all fields have been submitted
        registerUser(req.body.username, req.body.password, (result: any) => {
            res.send(result);
        });
    }
});

const articlesRouter = express.Router();
const articleRouter = express.Router();

//note cookieman verifies the server signed jwt, thus all token data should be trustworthy
articleRouter.use(cookieMan);
articleRouter.post('/create', (req: any, res) => {
    if(req.user.role == 1) {
        if("title" in req.body && "content" in req.body && "category" in req.body && "imgurl" in req.body) {
            createArticle(req.body.title, req.body.content, req.body.category, req.body.imgurl, req.user.uuid, (result: any) => {
                res.send(result);
            })
        }
    } else {
        console.log(req.user)
        res.send({error: 'Something went wrong.'})
    }
})

articleRouter.post('/update', (req: any, res) => {
    if(req.user.role == 1) {
        if("title" in req.body && "content" in req.body && "category" in req.body && "imgurl" in req.body && 'id' in req.body) {
            updateArticle(req.body.title, req.body.content, req.body.category, req.body.imgurl, req.body.id, (result: any) => {
                res.send(result);
            })
        }
    } else {
        console.log(req.user)
        res.send({error: 'Something went wrong.'})
    }
})

articleRouter.get('/id/:id', (req: any, res) => {
    if('id' in req.params) {
        getArticle(req.params.id).then((result: any) => {
            res.send(result);
        })   
    }
});

articlesRouter.get('/', (req: any, res) => {
    getArticles().then((result: any) => {
        res.send(result);
    });
});

const profileRouter = express.Router();
profileRouter.use(cookieMan);

profileRouter.get('/', (req: any, res) => {
    if('uuid' in req.user) {
        getUserByUUID(req.user.uuid).then((result) => {
            res.send({'success': {name: result.name, bio: result.bio, picture: result.picture}});
        })
    }
});

profileRouter.post('/update', (req: any, res) => {
    if('uuid' in req.user && 'bio' in req.body && 'picture' in req.body) {
        updateUser(req.user.uuid, req.body.bio, req.body.picture, (result: any) => {
            res.send(result);
        });
    }
});

//nested routing
apiRouter.use('/login', loginRouter);
apiRouter.use('/register', registerRouter);
apiRouter.use('/article', articleRouter);
apiRouter.use('/articles', articlesRouter);
apiRouter.use('/profile', profileRouter)


app.use('/api', apiRouter);


db.on('error', (error) => {
    console.error('MongoDB connection error:', error);
});

export { db };

//express is only started when mongodb has established a connection to the server
db.once('open', () => {
    console.log('MongoDB connection successful, starting application server');
    app.listen(port, () => {
        console.log(`Server is listening on port ${port}`);
    });
});

export { app };
