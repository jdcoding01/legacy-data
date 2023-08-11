const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('os_ads_advert_formats', {
    format_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    advert_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    media_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    format_image_video: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    headline: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    format_desc: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    destination_url: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    type: {
      type: DataTypes.STRING(10),
      allowNull: false,
      comment: "1=image,2=video"
    },
    order_num: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'os_ads_advert_formats',
    timestamps: false,
    paranoid: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "format_id" },
        ]
      },
    ]
  });
};
