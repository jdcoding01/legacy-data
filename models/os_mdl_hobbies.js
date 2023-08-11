const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('os_mdl_hobbies', {
    hobbies_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    linked_type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "1 = everyone, 2 = group, 3 = lifework"
    },
    title: {
      type: DataTypes.JSON,
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    order_no: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'os_mdl_hobbies',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "hobbies_id" },
        ]
      },
    ]
  });
};
