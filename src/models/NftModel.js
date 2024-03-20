const { DataTypes } = require('sequelize');
const sequelize = require('../db');

module.exports = (sequelize) => {
const BullNFT = sequelize.define('BullNFT', {
  name: {
    type: DataTypes.STRING,
    allowNull: true
  },
  nftId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    unique: true
  },
  owner: {
    type: DataTypes.STRING,
    allowNull: true
  },
  imageUrl: {
    type: DataTypes.STRING,
    allowNull: true
  },
  price2021Eth: {
    type: DataTypes.FLOAT,
    allowNull: true
  },
  price2022Eth: {
    type: DataTypes.FLOAT,
    allowNull: true
  },
  price2023Eth: {
    type: DataTypes.FLOAT,
    allowNull: true
  },
  priceEth: {
    type: DataTypes.DECIMAL(10, 5),
    allowNull: false,
    defaultValue: 0
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true
  },
  backgroundcolor: {
    type: DataTypes.STRING,
    allowNull: true
  },
  physicalform: {
    type: DataTypes.STRING,
    allowNull: true
  },
  typeofskin: {
    type: DataTypes.STRING,
    allowNull: true
  },
  eyecolor: {
    type: DataTypes.STRING,
    allowNull: true
  },
  typesofhorns: {
    type: DataTypes.STRING,
    allowNull: true
  },
  mouthtype: {
    type: DataTypes.STRING,
    allowNull: true
  },
  typesofweapons: {
    type: DataTypes.STRING,
    allowNull: true
  },
  about: {
    type: DataTypes.STRING,
    allowNull: true
  },
  contractaddress: {
    type: DataTypes.STRING,
    allowNull: true
  },
  tokenid: {
    type: DataTypes.STRING,
    allowNull: true
  },
  tokenstandard: {
    type: DataTypes.STRING,
    allowNull: true
  },
  chain: {
    type: DataTypes.STRING,
    allowNull: true
  },
  lastupdated: {
    type: DataTypes.STRING,
    allowNull: true
  },
  creatorearnings: {
    type: DataTypes.STRING,
    allowNull: true
  },
 }, 
);

  return BullNFT;
}