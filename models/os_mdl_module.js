const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('os_mdl_module', {
    module_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.JSON,
      allowNull: false
    },
    sub_title: {
      type: DataTypes.JSON,
      allowNull: false
    },
    linked_type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "1 = everyone, 2 = group, 3 = lifework"
    },
    order_no: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'os_mdl_module',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "module_id" },
        ]
      },
    ]
  });
};
