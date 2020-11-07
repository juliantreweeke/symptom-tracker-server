const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const AccountsSchema = require("../account/AccountsSchema");
const { SEX } = require("./constants");


const ClientSchema = new Schema(
  {  
    accounts: {
      type: [AccountsSchema],
      required: true
    },
    clinician: {
      type: Schema.Types.ObjectId,
      ref: 'Clinician',
      required: true,
    },
    DOB: {
      type: Date,
      required: false
    },
    email: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    notes: {
      type: String,
      required: false
    }, 
    sex: {
      type: String,
      required: true,
      enum: Object.values(SEX),
    },
  },
  {
    timestamps: true,
  }
);

const ClientModel = mongoose.model("Client", ClientSchema);
module.exports = ClientModel;
