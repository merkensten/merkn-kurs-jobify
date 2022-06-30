import express from 'express';
import {
  register,
  login,
  updateUser,
  deleteUser,
} from '../controllers/authController.js';

const router = express.Router();

router.route('/register').post(register);
router.route('/login').post(login);
router.route('/update-user').patch(updateUser);
router.route('/delete-user/:userId').delete(deleteUser);

export default router;
