const { tokenVerifier } = require('../helpers/jwt');

const authentication = (req, res, next) => {
    const access_token = req.headers.access_token;

    if (access_token) {
        try {
            let verifyToken = tokenVerifier(access_token);
            req.userData = verifyToken;
            next();
        } catch (err) {
            res.status(403).json({
                message: 'Token is invalid'
            })
        }
    } else {
        res.status(404).json({
            message: 'Token not Found!'
        })
    }
};

module.exports = { authentication };