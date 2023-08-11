const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('os_cities', {
    CityId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CountryId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    StateID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CityName: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    Latitude: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    Longitude: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    TimeZone: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    DmaId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Code: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'os_cities',
    timestamps: false
  });
};
