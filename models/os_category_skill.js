const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('os_category_skill', {
    category_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'os_categories',
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
    tableName: 'os_category_skill',
    timestamps: false,
    indexes: [
      {
        name: "category_skill_category_id_foreign",
        using: "BTREE",
        fields: [
          { name: "category_id" },
        ]
      },
      {
        name: "category_skill_skill_id_foreign",
        using: "BTREE",
        fields: [
          { name: "skill_id" },
        ]
      },
    ]
  });
};
