const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('os_module_skill', {
    module_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'os_modules',
        key: 'id'
      }
    },
    skill_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'os_skills',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'os_module_skill',
    timestamps: false,
    indexes: [
      {
        name: "module_skill_module_id_foreign",
        using: "BTREE",
        fields: [
          { name: "module_id" },
        ]
      },
      {
        name: "module_skill_skill_id_foreign",
        using: "BTREE",
        fields: [
          { name: "skill_id" },
        ]
      },
    ]
  });
};
