const UserRepositoryInst = require("./UserRepository");

const UserService = ({ UserRepository }) => {

  const createUser = async body => {
    return UserRepository.createUser(body);
  }

  const loginUser = body => {
    return UserRepository.loginUser(body);
  }

  const deleteUser = async id => {
    return UserRepository.deleteUser(id);
  };

  const getUser = async id => {
    return UserRepository.getUser(id);
  };

  const getUserByEmail = async email => {
    return UserRepository.getUserByEmail(email);
  }

  const getAllUsers = async () => {
    return UserRepository.getAllUsers();
  };

  const updateUser = async ({id, body}) => {
    UserRepository.updateUser(id, body)
  }

  return {
    createUser,
    deleteUser,
    getAllUsers,
    getUser,
    getUserByEmail,
    loginUser,
    updateUser,
  };
};

module.exports = UserService({
  UserRepository: UserRepositoryInst,
});
module.exports.impl = UserService;
