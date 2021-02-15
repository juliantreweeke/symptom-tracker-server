const ClientServiceInst = require("./ClientService");
/**
 * ClientController
 *
 * @description :: Client methods
 */
const ClientController = ({ ClientService }) => {
  /**
   * Get all clients
   *
   * @param {object} req
   * @param {object} res
   * @returns {array} An array of all clients
   */

  const getAllClients = async (_req, res) => {
    try {
      const clients = await ClientService.getAllClients();
      if (!clients) {
        return res.status(404).send("Could not find any clients");
      }
      return res.status(200).send(clients);
    } catch (err) {
      res.status(500).send(`Error: ${err}`);
    }
  };

  /**
   * Get one client
   *
   * @param {object} req
   * @param {object} res
   * @returns {object} One client
   */

  const getClient = async (req, res) => {
    const { id } = req.params;
    try {
      const client = await ClientService.getClient(id);
      if (!client) {
        return res.status(404).send("No client found");
      }
      return res.status(200).send(client);
    } catch (err) {
      res.status(500).send(`Error: ${err}`);
    }
  };

  /**
   * Deletes one client
   *
   * @param {object} req
   * @param {object} res
   */

  const deleteClient = async (req, res) => {
    const { id } = req.params;
    try {
      const client = await ClientService.deleteClient(id);
      if (!client) {
        return res.status(404).send("No client found");
      }
      return res.status(200).send("Client deleted");
    } catch (err) {
      res.status(500).send(`Error: ${err}`);
    }
  };

  /**
   * Updates one client
   *
   * @param {object} req
   * @param {object} res
   * @returns {object} returns an updated client
   */

  const updateClient = async (req, res) => {
    const { id, body } = req.params;
    try {
      const client = await ClientService.updateClient({ id, body });
      if (!client) {
        return res.status(404).send("No client found");
      }
      return res.status(200).send(client);
    } catch (err) {
      res.status(500).send(`Error: ${err}`);
    }
  };

  /**
   * Creates one client
   *
   * @param {object} req
   * @param {object} res
   * @returns {object} A new client
   */

  const createClient = async (req, res) => {
    const { body } = req;
    try {
      const client = await ClientService.createClient(body);
      return res.status(201).send(client);
    } catch (err) {
      res.status(500).send(`Error: ${err}`);
    }
  };

  return {
    createClient,
    deleteClient,
    getAllClients,
    getClient,
    updateClient,
  };
};

module.exports = ClientController({
  ClientService: ClientServiceInst,
});
