const express = require("express");
const bodyParser = require("body-parser");
const jwt = require('jsonwebtoken');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const users = [
  {
    id: 1,
    name: "João",
    lastName: "Carlos",
    email: "joao@gmail.com",
    password: 1234,
  },
];

app.get("/", function (req, res) {
  res.json({ ok: "Hello World" });
});

app.post("/login", function (req, res) {
  const { email, password } = req.body;

  const user = users.find(user => user.email === email && user.password === password);

  if(user){
    const token = jwt.sign(user, "my-secret-key");
    res.status(200).json({ token });
  }

  res.status(400).json({ msg: "Usuário não encontrado" });
});

app.listen(3000, function () {
  console.log("Listening on port 3000!");
});
