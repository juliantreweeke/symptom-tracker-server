const { expect } = require("chai");
const chai = require("chai");
const { stub, spy } = require("sinon");
const AssessmentController = require("../AssessmentController");
const AssessmentService = require("../AssessmentService");
const sinonChai = require("sinon-chai");

chai.use(sinonChai);

describe("AssessmentController", () => {

  describe("createAssessment", () => {
    let res;

    beforeEach(() => {
      stub(AssessmentService, "createAssessment");
      next = spy();
      res = {
        status: stub(),
        send: stub(),
      };
      res.status.returns(res);
      res.send.returns(res);
    });

    afterEach(() => {
      AssessmentService.createAssessment.restore();
    });

    context("when request is valid", () => {
      it("calls AssessmentService and returns a 201 response with an agreement body", async () => {
        const assessment = {
          description: "a assessment",
        };

        AssessmentService.createAssessment.resolves(assessment);

        const req = {
          body: {
            assessment,
          },
        };

        await AssessmentController.createAssessment(req, res);
        expect(res.status).to.be.calledWith(201);
        expect(res.send).to.be.calledWith(assessment);
        expect(AssessmentService.createAssessment).to.be.called;
      });
    });
    context("when Assessment Service is rejected", () => {
      it("returns a 500 response", async () => {
        const assessment = {
          description: "a assessment",
        };

        AssessmentService.createAssessment.rejects();

        const req = {
          body: {
            assessment,
          },
        };

        await AssessmentController.createAssessment(req, res);
        expect(res.status).to.be.calledWith(500);
      });
    });
  });

  describe("getAssessment", () => {
    let res;

    const req = {
      params: {
        id: "assessment-id ",
      },
    };

    beforeEach(() => {
      stub(AssessmentService, "getAssessment");
      next = spy();
      res = {
        status: stub(),
        send: stub(),
      };
      res.status.returns(res);
      res.send.returns(res);
    });

    afterEach(() => {
      AssessmentService.getAssessment.restore();
    });

    context("when request is valid", () => {
      it("calls AssessmentService and returns a 200 response with a assessment body", async () => {
        const assessment = {
          description: "a assessment",
        };

        AssessmentService.getAssessment.resolves(assessment);

        await AssessmentController.getAssessment(req, res);
        expect(res.status).to.be.calledWith(200);
        expect(res.send).to.be.calledWith(assessment);
        expect(AssessmentService.getAssessment).to.be.called;
      });
    });
    context("when Assessment Service does not return anything", () => {
      it("returns a 404 response", async () => {
        AssessmentService.getAssessment.resolves();

        await AssessmentController.getAssessment(req, res);
        expect(res.status).to.be.calledWith(404);
      });
    });
    context("when Assessment Service is rejected", () => {
      it("returns a 500 response", async () => {
        AssessmentService.getAssessment.rejects();

        await AssessmentController.createAssessment(req, res);
        expect(res.status).to.be.calledWith(500);
      });
    });
  });
  describe("getAllAssessments", () => {
    let res;

    const req = {};

    beforeEach(() => {
      stub(AssessmentService, "getAllAssessments");
      next = spy();
      res = {
        status: stub(),
        send: stub(),
      };
      res.status.returns(res);
      res.send.returns(res);
    });

    afterEach(() => {
      AssessmentService.getAllAssessments.restore();
    });

    context("when request is valid", () => {
      it("calls AssessmentService and returns a 200 response with assessments", async () => {
        const assessments = {
          description: "all assessments",
        };

        AssessmentService.getAllAssessments.resolves(assessments);

        await AssessmentController.getAllAssessments(req, res);
        expect(res.status).to.be.calledWith(200);
        expect(res.send).to.be.calledWith(assessments);
        expect(AssessmentService.getAllAssessments).to.be.called;
      });
    });
    context("when Assessment Service does not return anything", () => {
      it("returns a 404 response", async () => {
        AssessmentService.getAllAssessments.resolves();

        await AssessmentController.getAllAssessments(req, res);
        expect(res.status).to.be.calledWith(404);
      });
    });
    context("when Assessment Service is rejected", () => {
      it("returns a 500 response", async () => {
        AssessmentService.getAllAssessments.rejects();

        await AssessmentController.createAssessment(req, res);
        expect(res.status).to.be.calledWith(500);
      });
    });
  });
  describe("deleteAssessment", () => {
    let res;

    const req = {
      params: {
        id: "assessment-id ",
      },
    };

    beforeEach(() => {
      stub(AssessmentService, "deleteAssessment");
      next = spy();
      res = {
        status: stub(),
        send: stub(),
      };
      res.status.returns(res);
      res.send.returns(res);
    });

    afterEach(() => {
      AssessmentService.deleteAssessment.restore();
    });

    context("when request is valid", () => {
      it("calls AssessmentService and returns a 200 response with a assessment body", async () => {
        AssessmentService.deleteAssessment.resolves(true);

        await AssessmentController.deleteAssessment(req, res);
        expect(res.status).to.be.calledWith(200);
        expect(res.send).to.be.calledWith("Assessment deleted");
        expect(AssessmentService.deleteAssessment).to.be.called;
      });
    });
    context("when Assessment Service does not return anything", () => {
      it("returns a 404 response", async () => {
        AssessmentService.deleteAssessment.resolves(false);

        await AssessmentController.deleteAssessment(req, res);
        expect(res.status).to.be.calledWith(404);
      });
    });
    context("when Assessment Service is rejected", () => {
      it("returns a 500 response", async () => {
        AssessmentService.deleteAssessment.rejects();

        await AssessmentController.deleteAssessment(req, res);
        expect(res.status).to.be.calledWith(500);
      });
    });
  });
  describe("updateAssessment", () => {
    let res;

    const req = {
      params: {
        id: "assessment-id ",
      },
    };

    beforeEach(() => {
      stub(AssessmentService, "updateAssessment");
      next = spy();
      res = {
        status: stub(),
        send: stub(),
      };
      res.status.returns(res);
      res.send.returns(res);
    });

    afterEach(() => {
      AssessmentService.updateAssessment.restore();
    });

    context("when request is valid", () => {
      it("calls AssessmentService and returns a 200 response with a assessment body", async () => {
        const assessment = {
          description: "a assessment",
        };
        AssessmentService.updateAssessment.resolves(assessment);

        await AssessmentController.updateAssessment(req, res);
        expect(res.status).to.be.calledWith(200);
        expect(res.send).to.be.calledWith(assessment);
        expect(AssessmentService.updateAssessment).to.be.called;
      });
    });
    context("when Assessment Service does not return anything", () => {
      it("returns a 404 response", async () => {
        AssessmentService.updateAssessment.resolves();

        await AssessmentController.updateAssessment(req, res);
        expect(res.status).to.be.calledWith(404);
      });
    });
    context("when Assessment Service is rejected", () => {
      it("returns a 500 response", async () => {
        AssessmentService.updateAssessment.rejects();

        await AssessmentController.updateAssessment(req, res);
        expect(res.status).to.be.calledWith(500);
      });
    });
  });
});
