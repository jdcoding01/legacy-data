const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('os_regions', {
    region_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    CountryId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Country: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    StateId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    StateName: {
      type: DataTypes.STRING(55),
      allowNull: true
    },
    ISO2: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    MapReference: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    CityId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CityName: {
      type: DataTypes.STRING(55),
      allowNull: true
    },
    index_name: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    Longitude: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    Latitude: {
      type: DataTypes.STRING(55),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'os_regions',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "region_id" },
        ]
      },
    ]
  });
};
