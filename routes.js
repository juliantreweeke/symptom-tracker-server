const expressInst = require('express');
// eslint-disable-next-line import/no-unresolved
const { routes: AsessmentRoutes } = require('./assessment');
const { routes: ClinicianRoutes } = require('./clinician');
const { routes: ClientRoutes } = require('./client');

const ExpressRoutes = ({ express }) => {
  const router = express.Router();

  router.use('/assessment/', AsessmentRoutes);
  router.use('/clinician/', ClinicianRoutes);
  router.use('/client/', ClientRoutes);

  return router;
};




module.exports = ExpressRoutes({ express: expressInst });
module.exports.impl = ExpressRoutes;