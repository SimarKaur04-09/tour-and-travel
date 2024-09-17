import express from 'express';
import { createBooking, getBooking, getAllBooking, getBookingsByUserId } from '../controllers/bookingController.js';

const router = express.Router();

router.post('/', createBooking);
router.get('/:id', getBooking);
router.get('/', getAllBooking);
router.get('/user/:userId', getBookingsByUserId); // Add this line

export default router;
