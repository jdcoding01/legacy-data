const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('os_finance_sheet', {
    f_sheet_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    f_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    f_desc: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    f_credit: {
      type: DataTypes.DOUBLE(16,2),
      allowNull: false
    },
    f_credit_for: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    f_debit: {
      type: DataTypes.DOUBLE(16,2),
      allowNull: false
    },
    f_balance: {
      type: DataTypes.DOUBLE(16,2),
      allowNull: false
    },
    section_type: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    section_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "0 = default, 1 = pending, 2 = success, 3 = cancel"
    }
  }, {
    sequelize,
    tableName: 'os_finance_sheet',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "f_sheet_id" },
        ]
      },
    ]
  });
};
