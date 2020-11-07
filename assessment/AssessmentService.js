const AssessmentRepositoryInst = require("./AssessmentRepository");

const AssessmentService = ({ AssessmentRepository }) => {

  const createAssessment = async body => {
    return AssessmentRepository.createAssessment(body);
  }

  const deleteAssessment = async id => {
    return AssessmentRepository.deleteAssessment(id);
  };

  const getAssessment = async id => {
    return AssessmentRepository.getAssessment(id);
  };

  const getAllAssessments = async () => {
    return AssessmentRepository.getAllAssessments();
  };

  const updateAssessment = async ({id, body}) => {
    AssessmentRepository.updateAssessment(id, body)
  }

  return {
    createAssessment,
    deleteAssessment,
    getAllAssessments,
    getAssessment,
    updateAssessment
  };
};

module.exports = AssessmentService({
  AssessmentRepository: AssessmentRepositoryInst,
});
module.exports.impl = AssessmentService;
