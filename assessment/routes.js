const expressInst = require("express");
const AssessmentController = require("./AssessmentController");
const { createSchema } = require('./inputSchema');

const ExpressRoutes = ({ express }) => {
  const router = express.Router();
  router.get("/", AssessmentController.getAllAssessments);
  router.get("/:id", AssessmentController.getAssessment);
  router.patch("/:id", AssessmentController.updateAssessment);
  router.delete("/:id", AssessmentController.deleteAssessment);
  router.post("/", createSchema, AssessmentController.createAssessment);

  return router;
};

module.exports = ExpressRoutes({ express: expressInst });
