const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const userController = require('../controllers/user.controller');
const authMiddleware = require('../middlewares/auth.middleware');

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
  ],
  userController.registerUser
);

router.post(
  '/login',
  [
    body('email').isEmail().withMessage('Invalid Email'),
    body('password')
      .isLength({ min: 6 })
      .withMessage('Password Must be 6 Character Long '),
  ],
  userController.loginUser
);

router.get('/profile', authMiddleware.authUSer, userController.getUserProfile);
router.get('/logout', authMiddleware.authUSer, userController.logoutUser);

module.exports = router;
