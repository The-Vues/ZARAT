import * as dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import itemsRouter from './routes/items';
import userRouter from "./routes/user"

const db = require("./model")

const app = express();
const port = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/items", itemsRouter)
app.use("/user",userRouter)

db.sequelize.sync().then(req=>{
  app.listen(port, () => {
    console.log(`app listening at ${process.env.url}`);
  });
})