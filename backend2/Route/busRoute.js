

const express = require('express');
const router = express.Router();
const {
  createBus,
  getAllBuses,
  getBusById,
  updateBusById,
  deleteBusById
} = require('../controllers/busController');


router.post('/', createBus);
router.get('/', getAllBuses);
router.get('/:id', getBusById);
router.put('/:id', updateBusById);
router.delete('/:id', deleteBusById);
module.exports = router;
