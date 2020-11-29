const isNil = require('lodash.isnil');
const UserModelInst = require("./UserModel");
const { ROLE } = require("./constants");

const UserRepository = ({ UserModel }) => {
  /**
   * Creates a user
   * @param {object} data defines the data needed to create a user
   * @returns {object} A new user
   */
  const createClinician = async (data) => {
    const user = new UserModel({
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      password: data.password,
      role: data.role
    });
    const userData = await user.save();
    const token = await user.generateAuthToken(); // here it is calling the method 
    return { userData, token }
  };

  /**
   * Creates a client
   * @param {object} data defines the data needed to create a client
   * @returns {object} A new client
   */
  const createClient = async (data) => {
    console.log('createCLient rpo data', data);
    const client = new UserModel(data);
    await client.save();

    await UserModel.findOneAndUpdate(
      { _id: client.clinician },
      { $push: { clients: client._id } },
      { new: true }
    );
    return client;
  };



  /**
   * Deletes a user
   * @param {string} id the id of the user
   * @returns {object} The user that was deleted
   */
  const deleteUser = (id) => {
    return UserModel.findByIdAndDelete(id).then((user) => {
      if (isNil(user)) {
        return null;
      }
      return user;
    });
  };

  const getUser = async (id) => {
    return UserModel.findById(id)
      .populate("clinician")
      .populate("clients")
      .then((user) => {
        if (isNil(user)) {
          return null;
        }
        return user;
      });
  };

  const getUserByEmail = async (email) => {
    return UserModel.find({email})
      .then((user) => {
        console.log("USER",user);
        if (isNil(user)) {
          return null;
        }
        return user;
      });
  };

  const getAllUsers = () => {
    return UserModel.find().then((users) => {
      if (isNil(users)) {
        return null;
      }
      return users;
    });
  };

  /**
   * Gets all of a clinicians clients
   * @param {string} id the id of the clinician
   * @returns {Array} all of the clinicians clients
   */
  const getAllClientsById = async (id) => {
      return UserModel.find({clinician: id}).then((users) => {
        if (isNil(users)) {
          return null;
        }
        return users;
      });
  };

  const updateUser = ({ id, body }) => {
    return UserModel.findByIdAndUpdate(id, body).then((user) => {
      if (isNil(user)) {
        return null;
      }
      return user;
    });
  };

  const loginUser = async (data) => {
    const user = await UserModel.findByCredentials(data.email, data.password);
    console.log(data, user);
    if (isNil(user)) {
      return null;
    }
    const token = await user.generateAuthToken();
    return {user, token};
  };

  return {
    createClient,
    createClinician,
    deleteUser,
    loginUser,
    getAllClientsById,
    getUser,
    getUserByEmail,
    getAllUsers,
    updateUser,
  };
};

module.exports = UserRepository({ UserModel: UserModelInst });
module.exports.impl = UserRepository;
