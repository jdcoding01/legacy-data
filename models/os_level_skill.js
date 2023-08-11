const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('os_level_skill', {
    level_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'os_skill_levels',
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
    tableName: 'os_level_skill',
    timestamps: false,
    indexes: [
      {
        name: "level_skill_level_id_foreign",
        using: "BTREE",
        fields: [
          { name: "level_id" },
        ]
      },
      {
        name: "level_skill_skill_id_foreign",
        using: "BTREE",
        fields: [
          { name: "skill_id" },
        ]
      },
    ]
  });
};
