const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('os_ads_display', {
    display_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    placement: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    advert_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    display_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    ad_for: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    ad_for_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'os_ads_display',
    timestamps: false,
    paranoid: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "display_id" },
        ]
      },
    ]
  });
};
