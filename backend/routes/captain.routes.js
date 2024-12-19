const captainController = require('../controllers/captain.controller');
const express = require('express');
const router = express.Router();
const { body } = require('express-validator');

router.post(
  '/register',
  [
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname')
      .isLength({ min: 3 })
      .withMessage('First name Must be 3 Character Long'),
    body('password')
      .isLength({ min: 6 })
      .withMessage('Password Must be 6 Character Long'),
    body('vehicle.color')
      .isLength({ min: 3 })
      .withMessage('Color must be atleast 3 character long'),
    body('vehicle.plate')
      .isLength({ min: 3 })
      .withMessage('Plate must be atleast 3 character long'),
    body('vehicle.capacity')
      .isInt({ min: 1 })
      .withMessage('Capacity must be atleast 1'),
    body('vehicle.vehicleType')
      .isIn(['car', 'motorcycle', 'auto'])
      .withMessage('Invalid Vehicle Type'),
  ],
  captainController.registerCaptain
);

module.exports = router;
