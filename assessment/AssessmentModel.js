const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { FREQUENCY_TYPE } = require("./constants");

const QuestionSchema = new Schema({
  question: {
    type: String,
    required: true,
  },
});

const AssessmentSchema = new Schema(
  {
    description: {
      type: String,
      required: false,
    },
    frequency: {
      type: String,
      required: true,
      enum: Object.values(FREQUENCY_TYPE),
    },
    questions: {
      type: [QuestionSchema],
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    clinicianId: {
      type: Schema.Types.ObjectId,
      required: false,
    },
    clientId: {
      type: Schema.Types.ObjectId,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const AssessmentModel = mongoose.model("Assessment", AssessmentSchema);
module.exports = AssessmentModel;
