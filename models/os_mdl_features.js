const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('os_mdl_features', {
    feature_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    module_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    label: {
      type: DataTypes.JSON,
      allowNull: false
    },
    gender: {
      type: DataTypes.TINYINT,
      allowNull: false,
      comment: "0 = Both, 1 = Male, 2 = female"
    },
    help_tip: {
      type: DataTypes.JSON,
      allowNull: false
    },
    is_required: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    is_range_bar: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    field: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    config_type: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    place_type: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    order_no: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    allow_custom: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'os_mdl_features',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "feature_id" },
        ]
      },
    ]
  });
};
