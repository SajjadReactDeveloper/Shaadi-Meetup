const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Import Validation
const {validateEmail, validatePassword, validateName} = require('../utils/validation');

// Sign up
exports.signUp = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({
                status: 'fail',
                message: 'Please provide name, email and password',
            });
        }
        if (!validateEmail(email)) {
            return res.status(400).json({
                status: 'fail',
                message: 'Please provide a valid email',
            });
        }

        if (!validatePassword(password)) {
            return res.status(400).json({
                status: 'fail',
                message: 'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number and one special character',
            });
        }

        if (!validateName(name)) {
            return res.status(400).json({
                status: 'fail',
                message: 'Name must be at least 2 characters long and contain only letters',
            });
        }

        const hashedPassword = await bcrypt.hash(password, 12);
        const user = new User({
            name,
            email,
            password: hashedPassword,
        });
        await user.save();
        res.status(200).json({
            status: 'success',
            data: {
                user,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err,
        });
    }
};

// Sign in
exports.signIn = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({
                status: 'fail',
                message: 'Please provide email and password',
            });
        }
        const user = User.findOne({ email });
        if (!user) {
            return res.status(400).json({
                status: 'fail',
                message: 'Incorrect email or password',
            });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({
                status: 'fail',
                message: 'Incorrect email or password',
            });
        }

        // Create token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRES_IN,
        });

        // Send token to client
        res.status(200).json({
            status: 'success',
            data: {
                user,
                token,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err,
        });
    }
};

// Refresh Token
exports.refreshToken = async (req, res) => {
    try {
        const { refreshToken } = req.body;
        if (!refreshToken) {
            return res.status(400).json({
                status: 'fail',
                message: 'Please provide refresh token',
            });
        }

        // Verify refresh token
        const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);

        // Create new token
        const token = jwt.sign({ id: decoded.id }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRES_IN,
        });

        // Send token to client
        res.status(200).json({
            status: 'success',
            data: {
                token,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err,
        });
    }
};

// Forgot password
exports.forgotPassword = async (req, res) => {
    try {
        const { email } = req.body;

        // Check if user exists
        if (!email) {
            return res.status(400).json({
                status: 'fail',
                message: 'Please provide email',
            });
        }

        // Check if user exists

    }
    catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err,
        });
    }
};

// Reset password
exports.resetPassword = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if user exists
        if (!email) {
            return res.status(400).json({
                status: 'fail',
                message: 'Please provide email',
            });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({
                status: 'fail',
                message: 'User does not exist',
            });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 12);

        // Update user password
        user.password = hashedPassword;
        await user.save();

        // Send email to user with new password
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err,
        });
    }
};

// Get Profile
exports.getProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.status(200).json({
            status: 'success',
            data: {
                user,
            },
        });
    }
    catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err,
        });
    }
};

// Get all profiles
exports.getAllProfiles = async (req, res) => {
    try {
        const users = await User.find().select('-password');
        res.status(200).json({
            status: 'success',
            data: {
                users,
            },
        });
    }
    catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err,
        });
    }
};

// Get profile by id
exports.getProfileById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json({
            status: 'success',
            data: {
                user,
            },
        });
    }
    catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err,
        });
    }
};

// Delete profile
exports.deleteProfile = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.user.id);
        res.status(204).json({
            status: 'success',
            data: null,
        });
    }
    catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err,
        });
    }
};

// Delete profile by id
exports.deleteProfileById = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(204).json({
            status: 'success',
            data: null,
        });
    }
    catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err,
        });
    }
};

// Edit profile
exports.editProfile = async (req, res) => {
    try {
        const {name, image } = req.body;
        await User.findByIdAndUpdate(req.user.id, {
            name,
            image
        });
        res.status(200).json({
            status: 'success',
            data: {
                user,
            },
        });
    }
    catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err,
        });
    }
};

// Update Status
exports.updateStatus = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.user.id, { status: req.body.status }, { new: true, runValidators: true });
        res.status(200).json({
            status: 'success',
            data: {
                user,
            },
        });
    }
    catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err,
        });
    }
};

// Update Role
exports.updateRole = async (req, res) => {
    try {
        const user = await User.findOneAndUpdate({ _id: req.params.id }, { role: req.body.role }, { new: true, runValidators: true });
        res.status(200).json({
            status: 'success',
            data: {
                user,
            },
        });
    }
    catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err,
        });
    }
};

// Test route
exports.test = async (req, res) => {
    res.send('Test route');
}