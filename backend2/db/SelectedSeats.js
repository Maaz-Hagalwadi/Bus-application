const { DataTypes } = require('sequelize');
const { sequelize } = require('./dbConnectionsModel'); 

const SelectedSeats = sequelize.define('SelectedSeats', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  busId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  from: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  to: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  selectedSeats: {
    type: DataTypes.ARRAY(DataTypes.TEXT),
    allowNull: false,
  },
  
  gender: {
    type: DataTypes.ARRAY(DataTypes.ENUM('Male', 'Female', 'Other')),
    allowNull: false,
  },
  bookingDate: {
    type: DataTypes.DATEONLY,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  bookingstatus: {
    type: DataTypes.ENUM('true', 'false'),
    allowNull: false,
    defaultValue: 'false',
  }
  
}, {
  sequelize,
  modelName: 'SelectedSeats',
  tableName: 'seatselected', 
  timestamps: true, 
});

SelectedSeats.sync()
  .then(() => console.log('seatselected table synced'))
  .catch(err => console.error('Failed to sync seatselected table:', err));

  
module.exports = {SelectedSeats};
