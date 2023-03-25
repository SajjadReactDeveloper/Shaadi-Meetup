// Admin Middleware
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const requireAuth = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    try {
        // Check if the user is an admin
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        User.findById(decodedToken.id, (err, user) => {
            if (err) {
                return res.status(401).json({ message: 'Unauthorized' });
            }
            if (!user.role === 'admin') {
                return res.status(401).json({ message: 'Unauthorized' });
            }
            res.user = decodedToken;
            next();
        });
    } catch (err) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
}

