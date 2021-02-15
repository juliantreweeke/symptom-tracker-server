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
});
