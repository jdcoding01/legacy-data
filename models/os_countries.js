const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('os_countries', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    CountryId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    Country: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    FIPS104: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    ISO2: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    ISO3: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    ISON: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    Internet: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    Capital: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    MapReference: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    NationalitySingular: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    NationalityPlural: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    Currency: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    CurrencyCode: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    Population: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    Title: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    Comment: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'os_countries',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
