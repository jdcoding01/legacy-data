const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('os_conversations', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    conversation_id: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    message: {
      type: DataTypes.JSON,
      allowNull: true
    },
    last_message_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    type: {
      type: DataTypes.ENUM('group','conversation'),
      allowNull: false
    },
    user_to_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      references: {
        model: 'os_users',
        key: 'user_id'
      }
    },
    avatar: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    owner: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    users_data: {
      type: DataTypes.JSON,
      allowNull: true
    },
    users_ids: {
      type: DataTypes.JSON,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'os_conversations',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "conversations_user_to_id_foreign",
        using: "BTREE",
        fields: [
          { name: "user_to_id" },
        ]
      },
    ]
  });
};
