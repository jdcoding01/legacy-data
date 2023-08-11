const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('os_event_invitations_mail', {
    invitation_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    invitation_key: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    event_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    invitation_template: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    name_of_sender: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    reply_to: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    subject_line: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    email_addresses: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    mail_send_time: {
      type: DataTypes.TINYINT,
      allowNull: false,
      comment: "1 = immediately, 2 = after"
    },
    send_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    send_time: {
      type: DataTypes.TIME,
      allowNull: false
    },
    invitations_sent_counter: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'os_event_invitations_mail',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "invitation_id" },
        ]
      },
    ]
  });
};
