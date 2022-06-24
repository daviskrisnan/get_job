const { user } = require('../models');
const { decryptPass } = require('../helpers/bcrypt');
const { tokenGenerator } = require('../helpers/jwt');


class UserController {
    static async getAllUser(req, res) {
        try {
            let users = await user.findAll();

            res.status(200).json(users);
        } catch (err) {
            res.status(404).json({
                message: 'Not Found'
            });
        };
    };

    static async register(req, res) {
        try {
            const { name, username, email, password } = req.body;

            let result = await user.create({
                name, username, email, password
            });
            res.status(200).json(result);
        } catch (err) {
            res.status(404).json({
                message: 'Register has failed'
            })
        }
    };

    static async login(req, res) {
        try {
            const { email, password } = req.body;
            let dataUser = await user.findOne({
                where: {email}
            });

            if (dataUser) {
                if(decryptPass(password, dataUser.password)) {
                    let access_token = tokenGenerator(dataUser);
                    res.status(200).json({access_token});
                } else {
                    res.status(404).json({
                        message: 'Email tidak tersedia'
                    })
                } 
            } else {
                res.status(404).json({
                    message: 'not found'
                })
            }
        } catch (err) {
            res.status(404).json({
                message: 'data not found'
            })
        }
    };

    static async getDetailUser(req, res) {
        try {
            const id = +req.params.id;
            let result = await user.findByPk(id);
            res.status(200).json(result);
        } catch (err) {
            res.status(404).json({
                message: 'Failed!'
            })
        }
    }
};

module.exports = UserController;