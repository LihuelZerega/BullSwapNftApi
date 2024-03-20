const { DataTypes } = require('sequelize');
const sequelize = require('../db');

module.exports = (sequelize) => {
const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  ethereumBalance: {
    type: DataTypes.FLOAT,
    allowNull: false,
    defaultValue: 0
  }
}
);

    return User;
}