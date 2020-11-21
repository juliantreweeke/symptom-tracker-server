const ClientModelInst = require("./ClientModel");
const ClinicianModel = require("../clinician/ClinicianModel");

const ClientRepository = ({ ClientModel }) => {
  /**
   * Creates a client
   * @param {object} data defines the data needed to create a client
   * @returns {object} A new client
   */
  const createClient = async (data) => {
    const client = new ClientModel(data);
    await client.save();

    return ClinicianModel.findOneAndUpdate(
      { _id: client.clinician },
      { $push: { clients: client._id } },
      { new: true }
    );
  };

  /**
   * Deletes a client
   * @param {string} id the id of the client
   * @returns {object} The client that was deleted
   */
  const deleteClient = (id) => {
    return ClientModel.findByIdAndDelete(id).then((client) => {
      if (!client) {
        return null;
      }
      return client;
    });
  };

  const getClient = async (id) => {
    return ClientModel.findById(id)
      .populate("clinician")
      .then((client) => {
        if (!client) {
          return null;
        }
        return client;
      });
  };

  const getAllClients = () => {
    return ClientModel.find().then((clients) => {
      if (!clients) {
        return null;
      }
      return clients;
    });
  };

  const updateClient = ({ id, body }) => {
    return ClientModel.findByIdAndUpdate(id, body).then((client) => {
      if (!client) {
        return null;
      }
      return client;
    });
  };

  return {
    createClient,
    deleteClient,
    getClient,
    getAllClients,
    updateClient,
  };
};

module.exports = ClientRepository({ ClientModel: ClientModelInst });
module.exports.impl = ClientRepository;
