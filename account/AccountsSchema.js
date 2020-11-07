const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { ACCOUNT_TYPES } = require("./constants");

const AccountsSchema = new Schema({
    accountType: {
      type: String,
      required: true,
      enum: Object.values(ACCOUNT_TYPES),
    },
    uid: {
      type: String,
      required: false,
    },
    username: {
      type: String,
      required: false,
    },
    password: {
      type: String,
      required: false,
    },
  });


  module.exports = AccountsSchema;
