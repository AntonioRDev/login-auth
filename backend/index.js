const express = require("express");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const { protectRoutesMiddleware } = require("./middlewares");
const users = require("./get-users");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(protectRoutesMiddleware);

const SECRET_KEY = "my-secret-key";

// routes
app.get("/", function (req, res) {
  res.json({ ok: "Hello World" });
});

app.get("/users", (req, res) => {
  res.status(200).json(users);
});

app.post("/login", function (req, res) {
  const { email, password } = req.body;

  const user = users.find(
    (user) => user.email === email && user.password === password
  );

  if (user) {
    const token = jwt.sign({ id: user.id, email: user.email }, SECRET_KEY);
    res.status(200).json({ token });
  } else {
    res.status(404).json({ msg: "Usuário não encontrado." });
  }
});

// start the server 
app.listen(3333, function () {
  console.log("Listening on port 3333!");
});
