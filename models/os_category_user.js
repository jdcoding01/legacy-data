const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('os_category_user', {
    category_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'os_categories',
        key: 'id'
      }
    },
    user_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'os_users',
        key: 'user_id'
      }
    }
  }, {
    sequelize,
    tableName: 'os_category_user',
    timestamps: false,
    indexes: [
      {
        name: "category_user_category_id_foreign",
        using: "BTREE",
        fields: [
          { name: "category_id" },
        ]
      },
      {
        name: "category_user_user_id_foreign",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  });
};
