const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('os_events', {
    event_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    event_key: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    event_title: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "0 = offline, 1 = online"
    },
    event_type: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    show_map: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "1 = yes, 0 = no"
    },
    start_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    start_time: {
      type: DataTypes.TIME,
      allowNull: false
    },
    end_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    end_time: {
      type: DataTypes.TIME,
      allowNull: false
    },
    event_image: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    image_cropped: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    event_description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    organizer_name: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    organizer_description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    social_link_check: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    ticket_url: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    facebook: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    twitter: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    venue_name: {
      type: DataTypes.STRING(55),
      allowNull: true
    },
    address: {
      type: DataTypes.STRING(55),
      allowNull: true
    },
    address2: {
      type: DataTypes.STRING(55),
      allowNull: true
    },
    city: {
      type: DataTypes.STRING(55),
      allowNull: true
    },
    state: {
      type: DataTypes.STRING(55),
      allowNull: true
    },
    zip: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    country: {
      type: DataTypes.STRING(55),
      allowNull: true
    },
    geo_lat: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    geo_lng: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    status: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0,
      comment: "0 = draft, 1 = pending , 2 = approve, 3 = change, 4 = revoked, 5 = expired, 6 = cancel"
    },
    mail_status: {
      type: DataTypes.TINYINT,
      allowNull: false,
      comment: "0 = no mail send, 1= live event mail send, 2 = expired mail"
    },
    email_sent: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    event_view_counter: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    payment_method: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    first_name: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    paypal_account: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    beneficiary_name: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    beneficiary_address: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    beneficiary_account_type: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    beneficiary_account_no: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    beneficiary_ifsc: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    special_request: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    revoke_message: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    payment_country: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    payment_currency: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    payment_paypal_email: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    frecuency: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    note: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    is_archived: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    media_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'os_events',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "event_id" },
        ]
      },
    ]
  });
};
