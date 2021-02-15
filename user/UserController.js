const isNil = require('lodash.isnil');
const UserRepositoryInst = require("./UserRepository");

/**
 * UserController
 *
 * @description :: User methods
 */
const UserController = ({ UserRepository }) => {
  /**
   * Get all users
   *
   * @param {object} req
   * @param {object} res
   * @returns {array} An array of all users
   */

  const getAllUsers = async (_req, res) => {
    try {
      const users = await UserRepository.getAllUsers();
      if (isNil(users)) {
        return res.status(404).send("Could not find any users");
      }
      return res.status(200).send(users);
    } catch (err) {
      res.status(500).send(`Error: ${err}`);
    }
  };

  /**
   * Gets all of a clinicians clients
   *
   * @param {object} req
   * @param {object} res
   * @returns {array} An array of all users
   */

  const getAllClientsById = async (req, res) => {
    const { id } = req.params;
    try {
      const users = await UserRepository.getAllClientsById(id);
      if (isNil(users)) {
        return res.status(404).send("Could not find any users");
      }
      return res.status(200).send(users);
    } catch (err) {
      res.status(500).send(`Error: ${err}`);
    }
  };

  /**
   * Get one user
   *
   * @param {object} req
   * @param {object} res
   * @returns {object} One user
   */

  const getUser = async (req, res) => {
    const { id } = req.params;
    try {
      const user = await UserRepository.getUser(id);
      if (isNil(user)) {
        return res.status(404).send("No user found");
      }
      return res.status(200).send(user);
    } catch (err) {
      res.status(500).send(`Error: ${err}`);
    }
  };

  const getUserDetails = async (req, res) => {
    try {
      const user = await res.json(req.userData);
      if (isNil(user)) {
        return res.status(401).send("Unauthorized");
      }
      return res.status(200);
    } catch (err) {
      res.status(500).send(`Error: ${err}`);
    }
  };

  /**
   * Deletes one user
   *
   * @param {object} req
   * @param {object} res
   */

  const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
      const user = await UserRepository.deleteUser(id);
      if (isNil(user)) {
        return res.status(404).send("No user found");
      }
      return res.status(200).send("User deleted");
    } catch (err) {
      res.status(500).send(`Error: ${err}`);
    }
  };

  /**
   * Updates one user
   *
   * @param {object} req
   * @param {object} res
   * @returns {object} returns an updated user
   */

  const updateUser = async (req, res) => {
    const { body } = req;
    try {
      const user = await UserRepository.updateUser({ id: body._id, body });
      if (isNil(user)) {
        return res.status(404).send("No user found");
      }
      return res.status(200).send(user);
    } catch (err) {
      res.status(500).send(`Error: ${err}`);
    }
  };

  /**
   * Creates one user
   *
   * @param {object} req
   * @param {object} res
   * @returns {object} A new user
   */

  const createClinician = async (req, res) => {
    const { body } = req;

    const user = await UserRepository.getUserByEmail(body.email);
    if (user.length) {
      return res.status(409).json({
        message: "email already in use",
      });
    }

    try {
      const user = await UserRepository.createClinician(body);
      return res.status(201).send(user);
    } catch (err) {
      res.status(409).send(`Error: ${err}`);
    }
  };

  const createClient = async (req, res) => {
    const { body } = req;

    const user = await UserRepository.getUserByEmail(body.email);
    if (user.length) {
      return res.status(409).json({
        message: "email already in use",
      });
    }

    try {
      const user = await UserRepository.createClient(body);
      return res.status(201).send(user);
    } catch (err) {
      res.status(409).send(`Error: ${err}`);
    }
  };

  const loginUser = async (req, res) => {
    const { body } = req;
    try {
      const user = await UserRepository.loginUser(body);
      return res.status(201).send(user);
    } catch (err) {
      return res.status(401).send(`Error: ${err}`);
    }
  };


  return {
    createClinician,
    createClient,
    deleteUser,
    getUserDetails,
    getAllUsers,
    getAllClientsById,
    getUser,
    loginUser,
    updateUser,
  };
};

module.exports = UserController({
  UserRepository: UserRepositoryInst,
});
