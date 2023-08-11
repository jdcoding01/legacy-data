const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('os_user_skills', {
    user_skill_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    user_skill_key: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    skill_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    skill_level: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    is_custom: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    lifework_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'os_user_skills',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "user_skill_id" },
        ]
      },
    ]
  });
};
