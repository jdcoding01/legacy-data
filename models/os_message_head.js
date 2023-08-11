const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('os_message_head', {
    message_head_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    message_head_key: {
      type: DataTypes.STRING(155),
      allowNull: false
    },
    from_user_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    to_user_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    is_read: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'os_message_head',
    timestamps: false,
    paranoid: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "message_head_id" },
        ]
      },
    ]
  });
};
