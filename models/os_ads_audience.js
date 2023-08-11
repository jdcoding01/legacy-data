const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('os_ads_audience', {
    audience_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    audience_name: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    location_type: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    age_range: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    gender: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'os_ads_audience',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "audience_id" },
        ]
      },
    ]
  });
};
