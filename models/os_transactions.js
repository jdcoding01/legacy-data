const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('os_transactions', {
    tran_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    user_key: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    model_book_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    trans_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    trans_success_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    payment_payer_id: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    payment_token: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    payment_status: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    total_amount: {
      type: DataTypes.DOUBLE(6,2),
      allowNull: false
    },
    payment_method: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    trans_key: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    trans_for: {
      type: DataTypes.STRING(55),
      allowNull: false,
      comment: "1 = booking, 2 = ads_recharge"
    },
    trans_for_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'os_transactions',
    timestamps: false,
    paranoid: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "tran_id" },
        ]
      },
    ]
  });
};
