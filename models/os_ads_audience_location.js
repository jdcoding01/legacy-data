const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('os_ads_audience_location', {
    audience_location_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    audience_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    location: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    location_type: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'os_ads_audience_location',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "audience_location_id" },
        ]
      },
    ]
  });
};
