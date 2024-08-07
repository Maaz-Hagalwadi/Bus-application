
const { DataTypes } = require('sequelize');
const { sequelize } = require('./dbConnectionsModel'); 

const Login = sequelize.define('Login', {
  loginId: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
 
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});


Login.sync()
  .then(() => console.log('seatselected table synced'))
  .catch(err => console.error('Failed to sync seatselected table:', err));

module.exports = { Login };
