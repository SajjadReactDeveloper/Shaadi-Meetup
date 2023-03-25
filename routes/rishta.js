const rishtaController = require('../controllers/rishtaController');
const express = require('express');
const router = express.Router();

// Get all rishtas
router.get('/', rishtaController.getRishtas);

// Get a single rishta
router.get('/:id', rishtaController.getRishta);

// Create a rishta
router.post('/', rishtaController.createRishta);

// Update a rishta
router.patch('/:id', rishtaController.updateRishta);

// Delete a rishta
router.delete('/:id', rishtaController.deleteRishta);

// Get Rishtas by Caste
router.get('/caste/:caste', rishtaController.getRishtaByCaste);

// Get Rishtas by City
router.get('/city/:city', rishtaController.getRishtaByCity);

// Get Rishtas by Country
router.get('/country/:country', rishtaController.getRishtaByCountry);

// Get Rishtas by Sect
router.get('/sect/:sect', rishtaController.getRishtaBySect);

module.exports = router;