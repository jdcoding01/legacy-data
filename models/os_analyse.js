const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('os_analyse', {
    analyse_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    ip: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    country: {
      type: DataTypes.STRING(55),
      allowNull: true
    },
    pages: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    referer: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    url: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    isoCode: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    city: {
      type: DataTypes.STRING(55),
      allowNull: true
    },
    state: {
      type: DataTypes.STRING(55),
      allowNull: true
    },
    postal_code: {
      type: DataTypes.STRING(55),
      allowNull: true
    },
    browser_version: {
      type: DataTypes.STRING(55),
      allowNull: true
    },
    browser_name: {
      type: DataTypes.STRING(55),
      allowNull: true
    },
    browser_platform: {
      type: DataTypes.STRING(55),
      allowNull: true
    },
    device: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    device_name: {
      type: DataTypes.STRING(55),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'os_analyse',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "analyse_id" },
        ]
      },
    ]
  });
};
