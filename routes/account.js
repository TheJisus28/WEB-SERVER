import express from "express";
import { USERS_BBDD } from "../bbdd.js";

const accountRouter = express.Router();

// middleware
accountRouter.use((req, res, next) => {
  console.log(req.ip);
  next();
});

// search account
accountRouter.get("/:guid", (req, res) => {
  const { guid } = req.params;
  const user = USERS_BBDD.find((user) => user.guid === guid);

  if (!user) return res.status(404).send("User not found");

  return res.send(user);
});

// create account
accountRouter.post("/", (req, res) => {
  const { guid, name } = req.body;

  if (!guid || !name)
    return res.status(400).send(`Required parameters: "guid", "name"`);

  const user = USERS_BBDD.find((user) => user.guid === guid);
  if (user) return res.status(409).send();

  USERS_BBDD.push({
    guid,
    name,
  });

  return res.send();
});

// update account
accountRouter.patch("/:guid", (req, res) => {
  const { guid } = req.params;
  const { name } = req.body;

  const user = USERS_BBDD.find((user) => user.guid === guid);

  if (!user) return res.status(404).send();

  if (!name) return res.status(400).send(`Required paramter: "guid"`);

  user.name = name;

  return res.send();
});

// delete account
accountRouter.delete("/:guid", (req, res) => {
  const { guid } = req.params;
  const userIndex = USERS_BBDD.findIndex((user) => user.guid === guid);

  if (userIndex === -1) return res.status(404).send("User not found");

  USERS_BBDD.splice(userIndex, 1);

  return res.send();
});

export default accountRouter;
