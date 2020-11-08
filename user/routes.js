const expressInst = require("express");
const UserController = require("./UserController");
const auth = require("../config/auth");
const { createSchema } = require('./inputSchema');

const ExpressRoutes = ({ express }) => {
  const router = express.Router();
  router.get("/me", auth, UserController.getUserDetails);
  router.get("/", UserController.getAllUsers);
  router.get("/:id", UserController.getUser);
  router.patch("/:id", UserController.updateUser);
  router.delete("/:id", UserController.deleteUser);
  router.post("/register", UserController.createUser);
  router.post("/login", UserController.loginUser);

  return router;
};

module.exports = ExpressRoutes({ express: expressInst });
