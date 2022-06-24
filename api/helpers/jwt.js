const jwt = require('jsonwebtoken');
const secretWord = process.env.SECRET_WORD || 'rahasia';

const tokenGenerator = (data) => {
    const { id, name, email } = data;
    return jwt.sign({ id, name, email }, secretWord, {
        expiresIn: "1h"
    });
};

const tokenVerifier = (data) => {
    return jwt.verify(data, secretWord);
};

module.exports = {
    tokenGenerator, tokenVerifier
};