const expressInst = require("express");
const ClientController = require("./ClientController");
const { createSchema } = require('./inputSchema');

const ExpressRoutes = ({ express }) => {
  const router = express.Router();
  router.get("/", ClientController.getAllClients);
  router.get("/:id", ClientController.getClient);
  router.patch("/:id", ClientController.updateClient);
  router.delete("/:id", ClientController.deleteClient);
  router.post("/", createSchema, ClientController.createClient);

  return router;
};

module.exports = ExpressRoutes({ express: expressInst });
