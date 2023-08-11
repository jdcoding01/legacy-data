const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('os_temp_phone_verify', {
    temp_phone_verify_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    device_token: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    phone_number: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    phone_prefix: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    phone_country_iso2: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    verif_code: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'os_temp_phone_verify',
    timestamps: false,
    paranoid: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "temp_phone_verify_id" },
        ]
      },
    ]
  });
};
