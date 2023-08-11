const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('os_permission_role', {
    permission_role_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    permission_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    role_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    is_set: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'os_permission_role',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "permission_role_id" },
        ]
      },
    ]
  });
};
