const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('os_category_module', {
    category_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'os_categories',
        key: 'id'
      }
    },
    module_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'os_modules',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'os_category_module',
    timestamps: false,
    indexes: [
      {
        name: "category_module_category_id_foreign",
        using: "BTREE",
        fields: [
          { name: "category_id" },
        ]
      },
      {
        name: "category_module_module_id_foreign",
        using: "BTREE",
        fields: [
          { name: "module_id" },
        ]
      },
    ]
  });
};
