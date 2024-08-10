import express from 'express';
import AppController from '../controllers/AppController';
import { postNew } from '../controllers/UsersController';

const router = express.Router();

router.get('/status', AppController.getStatus);
router.get('/stats', AppController.getStats);
router.post('/users', postNew);

export default router;
