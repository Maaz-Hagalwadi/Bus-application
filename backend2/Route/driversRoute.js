const express = require('express');
const router = express.Router();
const driversController = require('../controllers/driversController');


router.post('/', driversController.createDriver);
router.get('/', driversController.getAllDrivers);
router.get('/:id', driversController.getDriverById);
router.put('/:id', driversController.updateDriverById);
router.delete('/:id', driversController.deleteDriverById);

module.exports = router;
