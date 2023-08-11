const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('os_channel_notification', {
    channel_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'os_massive_notification_channels',
        key: 'id'
      }
    },
    notification_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'os_massive_notifications',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'os_channel_notification',
    timestamps: false,
    indexes: [
      {
        name: "channel_notification_channel_id_foreign",
        using: "BTREE",
        fields: [
          { name: "channel_id" },
        ]
      },
      {
        name: "channel_notification_notification_id_foreign",
        using: "BTREE",
        fields: [
          { name: "notification_id" },
        ]
      },
    ]
  });
};
