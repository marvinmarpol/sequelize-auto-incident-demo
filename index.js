const express = require("express");
const initModels = require("./models/init-models");
const sequelizeInstance = require("./scripts/config");

const app = express();

const models = initModels(sequelizeInstance);

app.get("/users", async (req, res) => {
  try {
    const users = await models.users.findAll({
      include: [{ model: models.posts, as: "posts" }],
    });
    res.json(users);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message, name: err.name });
  }
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
