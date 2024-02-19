const jwt = require('jsonwebtoken');

export function generateToken(uuid: String, role: Number) {
    return jwt.sign({ uuid: uuid, role: 0 }, process.env.JWT_SECRET);
}