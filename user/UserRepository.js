const UserModelInst = require("./UserModel");

const UserRepository = ({ UserModel }) => {
  /**
   * Creates a user
   * @param {object} data defines the data needed to create a user
   * @returns {object} A new user
   */
  const createUser = async (data) => {
    //TODO check if email already exists
    // if (isUser.length >= 1) {
    //   return res.status(409).json({
    //     message: "email already in use"
    //   });
    // }
    const user = new UserModel({
      name: data.name,
      email: data.email,
      password: data.password
    });
    const userData = await user.save();
    const token = await user.generateAuthToken(); // here it is calling the method 
    return {userData, token}
  };

  /**
   * Deletes a user
   * @param {string} id the id of the user
   * @returns {object} The user that was deleted
   */
  const deleteUser = (id) => {
    return UserModel.findByIdAndDelete(id).then((user) => {
      if (!user) {
        return null;
      }
      return user;
    });
  };

  const getUser = async (id) => {
    return UserModel.findById(id)
      .populate("clinician")
      .then((user) => {
        if (!user) {
          return null;
        }
        return user;
      });
  };

  const getAllUsers = () => {
    return UserModel.find().then((users) => {
      if (!users) {
        return null;
      }
      return users;
    });
  };

  const updateUser = ({ id, body }) => {
    return UserModel.findByIdAndUpdate(id, body).then((user) => {
      if (!user) {
        return null;
      }
      return user;
    });
  };

  const loginUser = async (data) => {
    const user = await UserModel.findByCredentials(data.email, data.password);
    if (!user) {
      return null;
    }
    const token = await user.generateAuthToken();
    return {user, token};
  };

  return {
    createUser,
    deleteUser,
    loginUser,
    getUser,
    getAllUsers,
    updateUser,
  };
};

module.exports = UserRepository({ UserModel: UserModelInst });
module.exports.impl = UserRepository;
