const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('os_preferences', {
    preferences_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    preferences_key: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    def_key: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    value: {
      type: DataTypes.STRING(55),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'os_preferences',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "preferences_id" },
        ]
      },
    ]
  });
};
