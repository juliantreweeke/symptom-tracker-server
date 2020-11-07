const ClinicianServiceInst = require("./ClinicianService");
/**
 * ClinicianController
 *
 * @description :: Clinician methods
 */
const ClinicianController = ({ ClinicianService }) => {
  /**
   * Get all clinicians
   *
   * @param {object} req
   * @param {object} res
   * @returns {array} An array of all clinicians
   */

  const getAllClinicians = async (_req, res) => {
    try {
      const clinicians = await ClinicianService.getAllClinicians();
      if (!clinicians) {
        return res.status(404).send("Could not find any clinicians");
      }
      return res.status(200).send(clinicians);
    } catch (err) {
      res.status(500).send(`Error: ${err}`);
    }
  };

  /**
   * Get one clinician
   *
   * @param {object} req
   * @param {object} res
   * @returns {object} One clinician 
   */

  const getClinician = async (req, res) => {
    const { id } = req.params;
    try {
      const clinician = await ClinicianService.getClinician(id);
      if (!clinician) {
        return res.status(404).send("No clinician found");
      }
      return res.status(200).send(clinician);
    } catch (err) {
      res.status(500).send(`Error: ${err}`);
    }
  };

  /**
   * Deletes one clinician
   *
   * @param {object} req
   * @param {object} res
   */

  const deleteClinician = async (req, res) => {
    const { id } = req.params;
    try {
      const clinician = await ClinicianService.deleteClinician(id);
      if (!clinician) {
        return res.status(404).send("No clinician found");
      }
      return res.status(200).send("Clinician deleted");
    } catch (err) {
      res.status(500).send(`Error: ${err}`);
    }
  };

  /**
   * Updates one clinician
   *
   * @param {object} req
   * @param {object} res
   * @returns {object} returns an updated clinician
   */

  const updateClinician = async (req, res) => {
    const { params:{ id } , body } = req;
    try {
      const clinician = await ClinicianService.updateClinician( id, body );
      console.log(clinician, 'controlller');
      if (!clinician) {
        return res.status(404).send("No clinician found");
      }
      return res.status(200).send(clinician);
    } catch (err) {
      res.status(500).send(`Error: ${err}`);
    }
  };

  /**
   * Creates one clinician
   *
   * @param {object} req
   * @param {object} res
   * @returns {object} A new clinician
   */

  const createClinician = async (req, res) => {
    const { body } = req;
    try {
      const clinician = await ClinicianService.createClinician(body);
      return res.status(201).send(clinician);
    } catch (err) {
      res.status(500).send(`Error: ${err}`);
    }
  };

  return {
    createClinician,
    deleteClinician,
    getAllClinicians,
    getClinician,
    updateClinician,
  };
};

module.exports = ClinicianController({
  ClinicianService: ClinicianServiceInst,
});
