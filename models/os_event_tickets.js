const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('os_event_tickets', {
    ticket_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    ticket_key: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    event_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    ticket_type: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ticket_name: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    quantity: {
      type: DataTypes.DOUBLE(16,2),
      allowNull: false
    },
    price: {
      type: DataTypes.DOUBLE(16,2),
      allowNull: false
    },
    sold_tickets: {
      type: DataTypes.DOUBLE(16,2),
      allowNull: false
    },
    ticket_description: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    show_desc_on_event_page: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    sales_channel: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    sales_start_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    sales_start_time: {
      type: DataTypes.TIME,
      allowNull: false
    },
    sales_end_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    sales_end_time: {
      type: DataTypes.TIME,
      allowNull: false
    },
    ticket_visibility: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ticket_hide_type: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    schedule_hide_until_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    hide_until_check: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    schedule_hide_until_time: {
      type: DataTypes.TIME,
      allowNull: false
    },
    schedule_hide_after_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    hide_after_check: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    schedule_hide_after_time: {
      type: DataTypes.TIME,
      allowNull: false
    },
    min: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    max: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'os_event_tickets',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ticket_id" },
        ]
      },
    ]
  });
};
