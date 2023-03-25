const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        default: 'https://res.cloudinary.com/dzqjxjx8f/image/upload/v1600000000/default-profile-picture-300x300-1_ynjxqg.png',
    },
    role: {
        type: String,
        default: 'user',
    },
    status: {
        type: String,
        default: 'pending',
    },
}, {
    timestamps: true,
});

const User = mongoose.model('user', userSchema);

module.exports = User;