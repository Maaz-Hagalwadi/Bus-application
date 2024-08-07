const { DataTypes } = require('sequelize');
const { sequelize } = require('../db/dbConnectionsModel');
const { Booking } = require('../db/bookingModel');

const Payment = sequelize.define('Payment', {
  paymentId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  amount: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  paymentMethod: {
    type: DataTypes.STRING,
    allowNull: false
  },
  creditCardDetails: {
    type: DataTypes.JSON,
    allowNull: true
  },
  paypalEmail: {
    type: DataTypes.STRING,
    allowNull: true
  },
  upiDetails: {
    type: DataTypes.STRING,
    allowNull: true
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    allowNull: false
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    allowNull: false
  }
}, {
  timestamps: true 
});



Payment.sync()
  .then(() => console.log('Payment table synced'))
  .catch(err => console.error('Failed to sync Payment table:', err));

module.exports = { Payment };
