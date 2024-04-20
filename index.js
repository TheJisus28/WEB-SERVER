import express from "express";
import dotenv from "dotenv";
import accountRouter from "./routes/account.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT; //3000

app.use(express.json());
app.use(express.text());
app.use("/account",accountRouter)

// request without middlewares of accountRouter
app.get("/root",(req,res)=>{
  res.send()
})

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));