const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('os_event_ticket_payment', {
    ticket_payment_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    ticket_payment_key: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    ticket_purchase_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    event_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    ticket_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    amount: {
      type: DataTypes.DOUBLE(16,2),
      allowNull: false
    },
    ticket_count: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false,
      comment: "0 = not approved, 1 = approved"
    },
    user_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'os_event_ticket_payment',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ticket_payment_id" },
        ]
      },
    ]
  });
};
