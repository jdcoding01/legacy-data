const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('os_audience_user', {
    audience_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'os_audiences',
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
    }
  }, {
    sequelize,
    tableName: 'os_audience_user',
    timestamps: false,
    indexes: [
      {
        name: "audience_user_audience_id_foreign",
        using: "BTREE",
        fields: [
          { name: "audience_id" },
        ]
      },
      {
        name: "audience_user_user_id_foreign",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  });
};
