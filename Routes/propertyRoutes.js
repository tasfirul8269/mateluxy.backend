import express from 'express';
import {
  getAllProperties,
  getPropertyById,
  createProperty,
  updateProperty,
  deleteProperty
} from '../controllers/propertyController.js';

const router = express.Router();

router.get('/', getAllProperties);
router.get('/:id', getPropertyById);
router.post('/add-property', createProperty);
router.put('/update-property/:id', updateProperty);
router.delete('/delete-property/:id', deleteProperty);

export default router;
