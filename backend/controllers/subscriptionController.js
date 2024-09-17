// controllers/subscriptionController.js

import Subscription from '../models/Subscription.js';

export const subscribe = async (req, res) => {
    const { email } = req.body;

    try {
        const newSubscription = new Subscription({ email });
        await newSubscription.save();
        res.status(201).json({ message: 'Subscription successful', data: newSubscription });
    } catch (error) {
        res.status(500).json({ message: 'Failed to subscribe', error: error.message });
    }
};
