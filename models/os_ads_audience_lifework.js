const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('os_ads_audience_lifework', {
    audience_lifework_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    audience_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    lifework: {
      type: DataTypes.STRING(55),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'os_ads_audience_lifework',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "audience_lifework_id" },
        ]
      },
    ]
  });
};
