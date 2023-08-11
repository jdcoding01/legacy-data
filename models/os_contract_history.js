const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('os_contract_history', {
    contract_history_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    contract_history_key: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    model_id: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false
    },
    user_id: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    type: {
      type: DataTypes.TINYINT,
      allowNull: false,
      comment: "0 = agency, 1 = booking"
    }
  }, {
    sequelize,
    tableName: 'os_contract_history',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "contract_history_id" },
        ]
      },
    ]
  });
};
