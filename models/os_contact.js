const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('os_contact', {
    contact_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    contact_key: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    contact_name: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    contact_email: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    contact_number: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    contact_message: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    lang_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'os_contact',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "contact_id" },
        ]
      },
    ]
  });
};
