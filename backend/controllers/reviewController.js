import Tour from "../models/Tour.js";
import Review from "../models/Review.js";

export const createReview = async (req, res) => {
    const tourId = req.params.tourId;
    const reviewData = req.body;

    // Validate input data
    if (!tourId || !reviewData) {
        return res.status(400).json({ success: false, message: "Invalid input data" });
    }

    try {
        // Create a new review instance
        const newReview = new Review(reviewData);

        // Save the new review to the database
        const savedReview = await newReview.save();

        // Update the tour with the new review ID
        await Tour.findByIdAndUpdate(tourId, { $push: { reviews: savedReview._id } });

        // Respond with success
        res.status(200).json({ success: true, message: "Review submitted", data: savedReview });
    } catch (err) {
        console.error("Error creating review:", err);
        res.status(500).json({ success: false, message: "Failed to submit review" });
    }
};
