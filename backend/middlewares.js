const jwt = require("jsonwebtoken");

const SECRET_KEY = "my-secret-key";

// define the routes that are protected
const protectedRoutes = ["/users"];

const protectRoutesMiddleware = (req, res, next) => {
  try {
    const isProtectedRoute = protectedRoutes.find((route) => route === req.originalUrl) ? true : false;

    if (isProtectedRoute) {
      const authHeader = req.header("authorization");
      if (!authHeader) {
        res.status(401).json({ msg: "Necessária autenticação para acessar essa rota." });
      } else {
        const [, token] = authHeader.split(" ");
        const payload = jwt.verify(token, SECRET_KEY);

        if(!payload){
            res.status(401).json({ msg: "Token inválido." });
            return;
        }
        next();
      }
    } else {
      next();
    }
  } catch (error) {
    console.log("protectRoutesMiddleware error: ", error);
    res.status(500).json({ msg: "Erro interno no servidor." });
  }
};

module.exports = {
  protectRoutesMiddleware,
};
