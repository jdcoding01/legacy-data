const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('os_ads_stripe_customers', {
    stripe_customer_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    customer_id: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    stripe_email: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    stripe_token: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    card_id: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    city: {
      type: DataTypes.STRING(55),
      allowNull: true
    },
    country: {
      type: DataTypes.STRING(55),
      allowNull: true
    },
    address_1: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    address_2: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    state: {
      type: DataTypes.STRING(55),
      allowNull: true
    },
    card_type: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    exp_month: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    exp_year: {
      type: DataTypes.DATE(4),
      allowNull: false
    },
    card_no: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'os_ads_stripe_customers',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "stripe_customer_id" },
        ]
      },
    ]
  });
};
