const expressInst = require("express");
const UserController = require("./UserController");
const auth = require("../config/auth");
const { createClinicianSchema, createClientSchema, loginSchema } = require('./inputSchema');

const ExpressRoutes = ({ express }) => {
  const router = express.Router();
  router.get("/auth", auth, UserController.getUserDetails);
  router.get("/", UserController.getAllUsers);
  router.get("/:id", UserController.getUser);
  router.get("/clients/:id", UserController.getAllClientsById);
  router.patch("/:id", UserController.updateUser);
  router.patch("/client/", UserController.updateUser);
  router.delete("/:id", UserController.deleteUser);
  router.post("/login", loginSchema, UserController.loginUser);
  router.post("/client", createClientSchema, UserController.createClient);
  router.post("/register", createClinicianSchema, UserController.createClinician);

  return router;
};

module.exports = ExpressRoutes({ express: expressInst });
