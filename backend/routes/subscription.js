// routes/subscription.js

import express from 'express';
import { subscribe } from '../controllers/subscriptionController.js';

const router = express.Router();

router.post('/subscribe', subscribe);

export default router;
