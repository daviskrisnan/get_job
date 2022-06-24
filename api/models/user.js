'use strict';

const { encryptPass } = require('../helpers/bcrypt');
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user.init({
    name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING
    },
    username: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          message: "Username tidak boleh kosong"
        }
      }
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING
    }
  }, 
  {
    hooks: {
      beforeCreate: (user, options) => {
        user.password = encryptPass(user.password);
      },
      beforeUpdate: (user, options) => {
        user.password = encryptPass(user.password);
      }
    },
    sequelize,
    modelName: 'user',
  }
  );
  return user;
};