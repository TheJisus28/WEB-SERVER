console.clear();
import express from "express";
import dotenv from "dotenv";
import accountRouter from "./routes/account.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.text());
app.use("/account",accountRouter)

app.get("/raiz",(req,res)=>{
  res.send()
})

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));