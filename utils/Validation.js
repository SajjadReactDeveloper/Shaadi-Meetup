const validator = require('validator');

// Validate email
exports.validateEmail = (email) => {
    return validator.isEmail(email);
}

// Validate password
exports.validatePassword = (password) => {
    return validator.isStrongPassword(password);
}

// Validate name

exports.validateName = (name) => {
    return validator.isAlpha(name) && validator.isLength(name, { min: 2 });
}

// Validate phone number
exports.validatePhone = (phone) => {
    return validator.isMobilePhone(phone);
}

// Validate date

exports.validateDate = (date) => {
    return validator.isDate(date);
}

// Validate URL
exports.validateURL = (url) => {
    return validator.isURL(url);
}

// Validate IP address

exports.validateIP = (ip) => {
    return validator.isIP(ip);
}

// Validate credit card number

exports.validateCreditCard = (creditCard) => {
    return validator.isCreditCard(creditCard);
}

// Validate hexadecimal color

exports.validateHexColor = (hexColor) => {
    return validator.isHexColor(hexColor);
}

// Validate hexadecimal number

exports.validateHexNumber = (hexNumber) => {
    return validator.isHexadecimal(hexNumber);
}

