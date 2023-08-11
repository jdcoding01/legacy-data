const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('os_mdl_module_linked', {
    linked_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    module_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      comment: "module_id is hobbies , skills id, module id "
    },
    link: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      comment: "1 = star, 2= company, 3 = social"
    },
    type: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      comment: "1 = module, 2 = skills, 3 = hobbies"
    },
    linked_type: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      comment: "1 = everyone, 2 = group, 3 = lifework"
    }
  }, {
    sequelize,
    tableName: 'os_mdl_module_linked',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "linked_id" },
        ]
      },
    ]
  });
};
