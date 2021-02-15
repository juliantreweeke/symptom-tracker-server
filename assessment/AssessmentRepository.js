const AssessmentModelInst = require("./AssessmentModel");

const AssessmentRepository = ({ AssessmentModel }) => {
  /**
   * Creates a assessment
   * @param {object} data defines the data needed to create a assessment
   * @returns {object} A new assessment
   */
  const createAssessment = (data) => {
    const assessment = new AssessmentModel(data);
    return assessment.save();
  };

  /**
   * Deletes a assessment
   * @param {string} id the id of the assessment
   * @returns {object} The assessment that was deleted
   */
  const deleteAssessment = (id) => {
    return AssessmentModel.findByIdAndDelete(id).then((assessment) => {
      if (!assessment) {
        return null;
      }
      return assessment;
    });
  };

  const getAssessment = async (id) => {
    return AssessmentModel.findById(id).then((assessment) => {
      if (!assessment) {
        return null;
      }
      return assessment;
    });
  };

  const getAllAssessments = () => {
    return AssessmentModel.find().then((assessments) => {
      if (!assessments) {
        return null;
      }
      return assessments;
    });
  };

  const updateAssessment = ({ id, body }) => {
    return AssessmentModel.findByIdAndUpdate(id, body).then((assessment) => {
      if (!assessment) {
        return null;
      }
      return assessment;
    });
  };

  return {
    createAssessment,
    deleteAssessment,
    getAssessment,
    getAllAssessments,
    updateAssessment,
  };
};

module.exports = AssessmentRepository({ AssessmentModel: AssessmentModelInst });
module.exports.impl = AssessmentRepository;
