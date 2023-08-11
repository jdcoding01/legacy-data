const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('os_features', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    label: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    field_type_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    help_tip: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    gender_specific: {
      type: DataTypes.ENUM('female','male','both'),
      allowNull: false,
      defaultValue: "both"
    },
    is_required: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    allow_custom: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    module_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'os_features',
    timestamps: false,
    paranoid: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
