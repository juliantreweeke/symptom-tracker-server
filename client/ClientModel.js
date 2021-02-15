const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { GENDER } = require("./constants");

const ClientSchema = new Schema(
  {
    clinician: {
      type: Schema.Types.ObjectId,
      ref: "Clinician",
      required: true,
    },
    DOB: {
      type: Date,
      required: true,
    },
    mobile: {
      type: String,
      required: false,
    },
    notes: {
      type: String,
      required: false,
    },
    gender: {
      type: String,
      required: true,
      enum: Object.values(GENDER),
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const ClientModel = mongoose.model("Client", ClientSchema);
module.exports = ClientModel;
