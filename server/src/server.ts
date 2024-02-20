import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import mongoose from "mongoose";

import registerUser from "./secureUserSystem/register";
import loginUser from "./secureUserSystem/login";

import { cookieMan } from "./secureUserSystem/cookieMan";

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

const articleRouter = express.Router();
articleRouter.use(cookieMan);

articleRouter.post('/create', (req: any, res) => {
    if(req.user.role == 1) {
        console.log("YEETRS SKEETERS");
    } else {
        console.log("NJEEET");
    }
})

//nested routing
apiRouter.use('/login', loginRouter);
apiRouter.use('/register', registerRouter);
apiRouter.use('/article', articleRouter);


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
