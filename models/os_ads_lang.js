const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('os_ads_lang', {
    ads_lang_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    ads_lang_key: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    ads_manager_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    language: {
      type: DataTypes.STRING(55),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'os_ads_lang',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ads_lang_id" },
        ]
      },
    ]
  });
};
