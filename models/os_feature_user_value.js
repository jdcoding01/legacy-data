const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('os_feature_user_value', {
    feature_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'os_features',
        key: 'id'
      }
    },
    user_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'os_users',
        key: 'user_id'
      }
    },
    value_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'os_feature_values',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'os_feature_user_value',
    timestamps: false,
    indexes: [
      {
        name: "feature_user_value_feature_id_foreign",
        using: "BTREE",
        fields: [
          { name: "feature_id" },
        ]
      },
      {
        name: "feature_user_value_user_id_foreign",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "feature_user_value_value_id_foreign",
        using: "BTREE",
        fields: [
          { name: "value_id" },
        ]
      },
    ]
  });
};
