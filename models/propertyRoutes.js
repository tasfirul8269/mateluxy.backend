
const express = require('express');
const router = express.Router();
const propertyController = require('../controllers/propertyController');

// Property routes with the structure you want
router.get('/', propertyController.getAllProperties);
router.get('/:id', propertyController.getPropertyById);
router.post('/add-property', propertyController.createProperty);
router.put('/update-property/:id', propertyController.updateProperty);
router.delete('/delete-property/:id', propertyController.deleteProperty);

module.exports = router;