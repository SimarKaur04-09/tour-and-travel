import Booking from "../models/Booking.js";
import sendEmail from "../utils/emailService.js"; // Import the email service

// Create new booking
export const createBooking = async (req, res) => {
  const newBooking = new Booking(req.body);
  try {
    const savedBooking = await newBooking.save();

    // Send confirmation email
    const emailText = `
      Dear ${req.body.fullName},
      
      Thank you for booking your tour with us! Here are your booking details:
      
      Tour Name: ${req.body.tourName}
      Full Name: ${req.body.fullName}
      Guest Size: ${req.body.guestSize}
      Phone: ${req.body.phone}
      Booking Date: ${req.body.bookAt}
      
      We look forward to seeing you!
      
      Best Regards,
      Your Company Name
    `;

    await sendEmail(req.body.userEmail, 'Booking Confirmation', emailText);

    res.status(200).json({
      success: true,
      message: "Your tour is booked and a confirmation email has been sent to you.",
      data: savedBooking,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// Get single booking
export const getBooking = async (req, res) => {
  const id = req.params.id;
  try {
    const book = await Booking.findById(id);
    res.status(200).json({
      success: true,
      message: "Successful",
      data: book,
    });
  } catch (error) {
    res.status(404).json({ success: false, message: "Not found" });
  }
};

// Get all bookings
export const getAllBooking = async (req, res) => {
  try {
    const books = await Booking.find();
    res.status(200).json({
      success: true,
      message: "Successful",
      data: books,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// Get bookings by user ID
export const getBookingsByUserId = async (req, res) => {
  try {
    const bookings = await Booking.find({ userId: req.params.userId });
    console.log('Bookings:', bookings); // Log the bookings
    res.status(200).json({ success: true, message: 'Successful', data: bookings });
  } catch (error) {
    console.error('Error fetching bookings:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch bookings' });
  }
};
