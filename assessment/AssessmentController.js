const AssessmentServiceInst = require("./AssessmentService");
/**
 * AssessmentController
 *
 * @description :: Assessment methods
 */
const AssessmentController = ({ AssessmentService }) => {
  /**
   * Get all assessments
   *
   * @param {object} req
   * @param {object} res
   * @returns {array} An array of all assessments
   */

  const getAllAssessments = async (_req, res) => {
    try {
      const assessments = await AssessmentService.getAllAssessments();
      if (!assessments) {
        return res.status(404).send("Could not find any assessments");
      }
      return res.status(200).send(assessments);
    } catch (err) {
      res.status(500).send(`Error: ${err}`);
    }
  };

  /**
   * Get one assessment
   *
   * @param {object} req
   * @param {object} res
   * @returns {object} One assessment 
   */

  const getAssessment = async (req, res) => {
    const { id } = req.params;
    try {
      const assessment = await AssessmentService.getAssessment(id);
      if (!assessment) {
        return res.status(404).send("No assessment found");
      }
      return res.status(200).send(assessment);
    } catch (err) {
      res.status(500).send(`Error: ${err}`);
    }
  };

  /**
   * Deletes one assessment
   *
   * @param {object} req
   * @param {object} res
   */

  const deleteAssessment = async (req, res) => {
    const { id } = req.params;
    try {
      const assessment = await AssessmentService.deleteAssessment(id);
      if (!assessment) {
        return res.status(404).send("No assessment found");
      }
      return res.status(200).send("Assessment deleted");
    } catch (err) {
      res.status(500).send(`Error: ${err}`);
    }
  };

  /**
   * Updates one assessment
   *
   * @param {object} req
   * @param {object} res
   * @returns {object} returns an updated assessment
   */

  const updateAssessment = async (req, res) => {
    const { id, body } = req.params;
    try {
      const assessment = await AssessmentService.updateAssessment({ id, body });
      if (!assessment) {
        return res.status(404).send("No assessment found");
      }
      return res.status(200).send(assessment);
    } catch (err) {
      res.status(500).send(`Error: ${err}`);
    }
  };

  /**
   * Creates one assessment
   *
   * @param {object} req
   * @param {object} res
   * @returns {object} A new assessment
   */

  const createAssessment = async (req, res) => {
    const { body } = req;
    try {
      const assessment = await AssessmentService.createAssessment(body);
      return res.status(201).send(assessment);
    } catch (err) {
      res.status(500).send(`Error: ${err}`);
    }
  };

  return {
    createAssessment,
    deleteAssessment,
    getAllAssessments,
    getAssessment,
    updateAssessment,
  };
};

module.exports = AssessmentController({
  AssessmentService: AssessmentServiceInst,
});
