const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('os_portfolio_images', {
    portfolio_img_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    portfolio_img_key: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    portfolio_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    portfolio_image: {
      type: DataTypes.STRING(55),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'os_portfolio_images',
    timestamps: false,
    paranoid: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "portfolio_img_id" },
        ]
      },
    ]
  });
};
