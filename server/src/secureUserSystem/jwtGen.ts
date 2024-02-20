const jwt = require('jsonwebtoken');

export function generateToken(uuid: String, role: Number, username: String) {
    return jwt.sign({ uuid: uuid, role: 0, username: username }, process.env.JWT_SECRET);
}