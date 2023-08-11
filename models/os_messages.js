const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('os_messages', {
    message_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    message_key: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    message_head_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    from_user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    to_user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    from_user_delete: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    to_user_delete: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    section_type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "0= message, 1= casting,2= booking, 3 = profile, 4= agency"
    },
    section_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    is_read: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "0= message, 1 = audio call, 2 = video call"
    }
  }, {
    sequelize,
    tableName: 'os_messages',
    timestamps: false,
    paranoid: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "message_id" },
        ]
      },
    ]
  });
};
