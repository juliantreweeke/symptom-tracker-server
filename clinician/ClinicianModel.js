const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const AccountsSchema = require("../account/AccountsSchema");

// const AccountsSchema = new Schema({
//   accountType: {
//     type: String,
//     required: true,
//     enum: Object.values(ACCOUNT_TYPES),
//   },
//   uid: {
//     type: String,
//     required: false,
//   },
//   username: {
//     type: String,
//     required: false,
//   },
//   password: {
//     type: String,
//     required: false,
//   },
// });

const ClinicianSchema = new Schema(
  { 
    accounts: {
      type: [AccountsSchema],
      required: true
    },
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
    email: {
      type: String,
      required: true,
    },
    imageURL: {
      type: String,
      required: false,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const ClinicianModel = mongoose.model("Clinician", ClinicianSchema);
module.exports = ClinicianModel;

