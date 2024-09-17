// models/Subscription.js

import mongoose from 'mongoose';

const subscriptionSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
});

const Subscription = mongoose.model('Subscription', subscriptionSchema);

export default Subscription;
