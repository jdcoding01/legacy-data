const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('os_payment_accounts', {
    payment_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    payment_key: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    paypal_name: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    paypal_account: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    stripe_name: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    stripe_account: {
      type: DataTypes.STRING(55),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'os_payment_accounts',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "payment_id" },
        ]
      },
    ]
  });
};
