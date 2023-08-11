const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('os_occupations', {
    occupation_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "0 = star, 1 = company"
    },
    parent_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    occupation_name: {
      type: DataTypes.JSON,
      allowNull: false
    },
    icon: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    occu_desc: {
      type: DataTypes.JSON,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'os_occupations',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "occupation_id" },
        ]
      },
      {
        name: "occupations_parent_id_index",
        using: "BTREE",
        fields: [
          { name: "parent_id" },
        ]
      },
    ]
  });
};
