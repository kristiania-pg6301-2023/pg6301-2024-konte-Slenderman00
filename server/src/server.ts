import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

dotenv.config()

const app = express()
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send("hello world");
})


const apiRouter = express.Router();

apiRouter.get('/', (req, res) => {
    res.send("this is api home")
})

const loginRouter = express.Router();

loginRouter.get('/', (req, res) => {
    res.send("this is login home")
});


//nested routing
apiRouter.use('/login', loginRouter);
app.use('/api', apiRouter);

app.use(cookieParser())

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
