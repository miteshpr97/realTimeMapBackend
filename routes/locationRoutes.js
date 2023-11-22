const express = require('express');
const locationController = require('../controllers/locationController');

const router = express.Router();

router.post('/share-location', locationController.shareLocation);
router.get('/all-location', locationController.getAllLocations);
router.get('/view-location/:userName', locationController.getLocation);

module.exports = router;
