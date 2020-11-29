const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { GENDER, ROLE } = require("./constants");
require("dotenv").config();

const UserSchema = Schema({
  clients: [
    {
      type: Schema.Types.ObjectId,
    }
  ],
  email: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: false,
  },
  role: {
    type: String,
    enum: Object.values(ROLE),
    required: true,
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
  businessName: {
    type: String,
    required: false,
  },
  imageURL: {
    type: String,
    required: false,
  },
  clinician: {
    type: Schema.Types.ObjectId,
    required: false,
  },
  DOB: {
    type: Date,
    required: false
  },
  mobile: {
    type: String,
    required: false,
  },
  notes: {
    type: String,
    required: false
  }, 
  gender: {
    type: String,
    required: false,
    enum: Object.values(GENDER),
  },
});

//this method will hash the password before saving the user model
UserSchema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});

//this method generates an auth token for the user
UserSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign(
    {
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      role: user.role
    },
    process.env.JWT_SECRET
  );
  user.tokens = user.tokens.concat({ token });
  await user.save();
  return token;
};

//this method search for a user by email and password.
UserSchema.statics.findByCredentials = async (email, password) => {
  console.log(email, password);

  const user = await UserModel.findOne({ email });
  if (!user) {
    throw new Error({ error: "Invalid login details" });
  }
  const isPasswordMatch = await bcrypt.compare(password, user.password);
  if (!isPasswordMatch) {
    throw new Error({ error: "Invalid login details" });
  }
  return user;
};

const UserModel = mongoose.model("User", UserSchema);
module.exports = UserModel;
