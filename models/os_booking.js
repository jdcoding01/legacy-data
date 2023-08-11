const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('os_booking', {
    booking_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    booking_key: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    job_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    job_title: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    job_description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    payment_status: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    venue_name: {
      type: DataTypes.STRING(55),
      allowNull: true
    },
    address: {
      type: DataTypes.STRING(155),
      allowNull: true
    },
    address2: {
      type: DataTypes.STRING(155),
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
      type: DataTypes.STRING(55),
      allowNull: true
    },
    country: {
      type: DataTypes.STRING(55),
      allowNull: true
    },
    geo_lat: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    geo_lng: {
      type: DataTypes.STRING(20),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'os_booking',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "booking_id" },
        ]
      },
    ]
  });
};
