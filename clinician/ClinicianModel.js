const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ClinicianSchema = new Schema(
  { 
    businessName: {
      type: String,
      required: false,
    },
    clients: [
      {
        type: Schema.Types.ObjectId,
        ref: "Client"
      }
    ],
    imageURL: {
      type: String,
      required: false,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const ClinicianModel = mongoose.model("Clinician", ClinicianSchema);
module.exports = ClinicianModel;

