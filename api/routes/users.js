import express from 'express';
import {
  getUsers,
  getUser,
  createUser,
  deleteUser,
  updateUser,
} from '../controllers/user.js';

const router = express.Router();

router.get('/', getUsers);
router.get('/:id', getUser);
router.post('/', createUser);
router.delete('/:id', deleteUser);
router.put('/:id', updateUser);

export default router;
