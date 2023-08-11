const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('os_subscriber', {
    subscriber_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    subscriber_key: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    subscriber_email: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    is_reply: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    lang_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'os_subscriber',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "subscriber_id" },
        ]
      },
    ]
  });
};
