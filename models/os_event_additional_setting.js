const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('os_event_additional_setting', {
    setting_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    setting_key: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    event_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    listing_privacy: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      comment: "1 = public, 2 = private"
    },
    event_type: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    event_topic: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    event_sub_topic: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    share_on_social: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    share_invite_only: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    required_pass: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "1 = show , 0 = hide"
    },
    password: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    salt: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    remaining_ticket_no: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "1 = show , 0 = hide"
    }
  }, {
    sequelize,
    tableName: 'os_event_additional_setting',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "setting_id" },
        ]
      },
    ]
  });
};
