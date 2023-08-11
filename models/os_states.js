const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('os_states', {
    StateId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CountryId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    StateName: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    Code: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    ADM1Code: {
      type: DataTypes.STRING(20),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'os_states',
    timestamps: false
  });
};
