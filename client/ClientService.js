const ClientRepositoryInst = require("./ClientRepository");

const ClientService = ({ ClientRepository }) => {

  const createClient = async body => {
    return ClientRepository.createClient(body);
  }

  const deleteClient = async id => {
    return ClientRepository.deleteClient(id);
  };

  const getClient = async id => {
    return ClientRepository.getClient(id);
  };

  const getAllClients = async () => {
    return ClientRepository.getAllClients();
  };

  const updateClient = async ({id, body}) => {
    ClientRepository.updateClient(id, body)
  }

  // TODO WHEN LOGIN AND AUTH EXISTS
  const canUpdateClient  = async ({id, body}) => {
    const client = await getClient(id);

    if (!client) {
      return {
        errorHttpStatus: 'NOT_FOUND'
      };
    }

    const isCliniciansClient = client.clinician.id === user.id;

    return {
      errorHttpStatus: !isCliniciansClient && 'FORBIDDEN'
    };
  }

  return {
    createClient,
    deleteClient,
    getAllClients,
    getClient,
    updateClient,
    canUpdateClient
  };
};

module.exports = ClientService({
  ClientRepository: ClientRepositoryInst,
});
module.exports.impl = ClientService;
