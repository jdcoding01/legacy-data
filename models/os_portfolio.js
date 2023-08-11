const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('os_portfolio', {
    portfolio_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    portfolio_key: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    location: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    venue_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    venue_address: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    venue_city: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    venue_state: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    venue_postal_code: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    venue_country: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    geo_lat: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    geo_lng: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    job_type: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    company: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    cover_image: {
      type: DataTypes.STRING(55),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'os_portfolio',
    timestamps: false,
    paranoid: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "portfolio_id" },
        ]
      },
    ]
  });
};
