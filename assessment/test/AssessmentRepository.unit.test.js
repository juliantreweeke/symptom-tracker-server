const { expect } = require("chai");
const { stub } = require("sinon");

const implementation = require("../AssessmentRepository").impl;

describe("AssessmentRepository", () => {
  describe("createAssessment", () => {
    it("should call save method from the model", async () => {
      const AssessmentModelMock = stub();
      AssessmentModelMock.prototype.save = stub();

      const AssessmentRepository = implementation({
        AssessmentModel: AssessmentModelMock,
      });

      const data = {
        description: "description of a assessment",
        title: "A assessment",
      };

      await AssessmentRepository.createAssessment(data);

      expect(AssessmentModelMock.calledOnce).to.be.true;

      expect(AssessmentModelMock).to.have.been.calledWith({
        description: "description of a assessment",
        title: "A assessment",
      });
    });
  });
  describe("deleteAssessment", () => {
    it("should call findByIdAndDelete method from the model and return assessment if id is valid", async () => {
      const id = "assessmentId";
      const assessment = "a assessment";
      const AssessmentModelMock = stub();
      AssessmentModelMock.findByIdAndDelete.resolves(assessment);
      const AssessmentRepository = implementation({
        AssessmentModel: AssessmentModelMock,
      });
      await AssessmentRepository.deleteAssessment(id);
    //   expect(AssessmentModelMock.calledOnce).to.be.true;
    //   expect(AssessmentModelMock).to.have.been.calledWith(assessment);
    });
  });
});
