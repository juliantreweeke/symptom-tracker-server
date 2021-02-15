const expressInst = require('express');
const AsessmentRoutes = require('./assessment');
const { routes: ClinicianRoutes } = require('./clinician');
const { routes: ClientRoutes } = require('./client');
const UserRoutes = require('./user');

const ExpressRoutes = ({ express }) => {
  const router = express.Router();
  router.use('/assessment/', AsessmentRoutes);
  router.use('/clinician/', ClinicianRoutes);
  router.use('/client/', ClientRoutes);
  router.use('/user/', UserRoutes);

  return router;
};

module.exports = ExpressRoutes({ express: expressInst });
module.exports.impl = ExpressRoutes;