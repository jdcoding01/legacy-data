const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('os_mdl_module_skills', {
    module_skill_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    module_skill_key: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    module_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    skill_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    order_no: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'os_mdl_module_skills',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "module_skill_id" },
        ]
      },
    ]
  });
};
