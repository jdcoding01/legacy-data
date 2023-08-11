const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('os_currency_rates', {
    currency_rate_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    currency: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    rate: {
      type: DataTypes.DOUBLE(16,2),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'os_currency_rates',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "currency_rate_id" },
        ]
      },
    ]
  });
};
