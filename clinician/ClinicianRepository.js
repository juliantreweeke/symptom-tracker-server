const ClinicianModelInst = require("./ClinicianModel");

const ClinicianRepository = ({ ClinicianModel }) => {
  /**
   * Creates a clinician
   * @param {object} data defines the data needed to create a clinician
   * @returns {object} A new clinician
   */
  const createClinician = (data) => {
      const clinician = new ClinicianModel(data);
      return clinician.save();
  }
  
  /**
   * Deletes a clinician
   * @param {string} id the id of the clinician
   * @returns {object} The clinician that was deleted
   */
  const deleteClinician = (id) => {
    return ClinicianModel.findByIdAndDelete(id).then((clinician) => {
      if(!clinician){
         return null;
      }
      return clinician;
    });
  };

  const getClinician =  async (id) => {
    return ClinicianModel.findById(id).populate('clients').then((clinician) => {
      if (!clinician) {
        return null;
      }
      return clinician;
    });
  };

  const getAllClinicians = () => {
    return ClinicianModel.find().then((clinicians) => {
      if (!clinicians) {
        return null;
      }
      return clinicians;
    });
  };

  const updateClinician = async ( id, body ) => {
    const query = { _id: id };

    const updatedClinician = await ClinicianModel.findOneAndUpdate(query, body, {
      new: true
    }).exec();

    return updatedClinician;
    };

  return {
    createClinician,
    deleteClinician,
    getClinician,
    getAllClinicians,
    updateClinician,
  };
};

module.exports = ClinicianRepository({ ClinicianModel: ClinicianModelInst });
module.exports.impl = ClinicianRepository;
