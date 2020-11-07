const expressInst = require("express");
const ClinicianController = require("./ClinicianController");
const { createSchema } = require('./inputSchema');

const ExpressRoutes = ({ express }) => {
  const router = express.Router();
  router.get("/", ClinicianController.getAllClinicians);
  router.get("/:id", ClinicianController.getClinician);
  router.patch("/:id", ClinicianController.updateClinician);
  router.delete("/:id", ClinicianController.deleteClinician);
  router.post("/", createSchema, ClinicianController.createClinician);

  return router;
};

module.exports = ExpressRoutes({ express: expressInst });
