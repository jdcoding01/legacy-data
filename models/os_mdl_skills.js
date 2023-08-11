const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('os_mdl_skills', {
    skills_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    skills_key: {
      type: DataTypes.STRING(55),
      allowNull: false
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
    level: {
      type: DataTypes.JSON,
      allowNull: false
    },
    order_no: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    lifework_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    is_custom: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'os_mdl_skills',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "skills_id" },
        ]
      },
    ]
  });
};
