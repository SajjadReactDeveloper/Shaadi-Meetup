const mongoose = require('mongoose');

const rishtaSchema = new mongoose.Schema({
    Dob: {
        type: Date,
        default: Date.now,
        required: true,
    },
    height: {
        type: Number,
        required: true,
    },
    weight: {
        type: Number,
        required: true,
    },
    cnic: {
        type: String,
        unique: true,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    city: {
        type: String,
       required: true
    },
    country: {
        type: String,
       required: true
    },
    sect: {
        type: String,
       required: true
    },
    caste: {
        type: String,
       required: true
    },
    maritalStatus: {
        type: String,
       required: true
    },
    education: {
        type: String,
       required: true
    },
    profession: {
        type: String,
       required: true
    },
    income: {
        type: String,
       required: true
    },
    fatherName: {
        type: String,
       required: true
    },
    fatherOccupation: {
        type: String,
       required: true
    },
    motherName: {
        type: String,
       required: true
    },
    motherOccupation: {
        type: String,
       required: true
    },
    siblings: {
        type: String,
       required: true
    },
    about: {
        type: String,
       required: true
    },
    status: {
        type: String,
        default: 'pending',
    },
    color: {
        type: String,
        required: true,
    },
    image: [{
        type: String,
        default: 'https://res.cloudinary.com/dzqjxjx8f/image/upload/v1600000000/default-profile-picture-300x300-1_ynjxqg.png',
    }],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true,
    },
}, {
    timestamps: true,
});

const Rishta = mongoose.model('rishta', rishtaSchema);

module.exports = Rishta;
