const ClinicianRepositoryInst = require("./ClinicianRepository");

const ClinicianService = ({ ClinicianRepository }) => {

  const createClinician = async body => {
    return ClinicianRepository.createClinician(body);
  }

  const deleteClinician = async id => {
    return ClinicianRepository.deleteClinician(id);
  };

  const getClinician = async id => {
    return ClinicianRepository.getClinician(id);
  };

  const getAllClinicians = async () => {
    return ClinicianRepository.getAllClinicians();
  };

  const updateClinician = async (id, body) => {
    return ClinicianRepository.updateClinician(id, body)
  }

  return {
    createClinician,
    deleteClinician,
    getAllClinicians,
    getClinician,
    updateClinician
  };
};

module.exports = ClinicianService({
  ClinicianRepository: ClinicianRepositoryInst,
});
module.exports.impl = ClinicianService;
