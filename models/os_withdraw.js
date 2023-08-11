const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('os_withdraw', {
    withdraw_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    f_sheet_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    trans_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    paypal_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    paypal_country: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    amount: {
      type: DataTypes.DOUBLE(16,2),
      allowNull: false
    },
    previous_amount: {
      type: DataTypes.DOUBLE(16,2),
      allowNull: false
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false,
      comment: "0 = pending , 1 = approved, 2 = cancel"
    }
  }, {
    sequelize,
    tableName: 'os_withdraw',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "withdraw_id" },
        ]
      },
    ]
  });
};
