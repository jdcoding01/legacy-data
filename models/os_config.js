const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('os_config', {
    config_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    config_key: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    def_key: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    def_value: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    is_static: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'os_config',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "config_id" },
        ]
      },
      {
        name: "config_def_key_index",
        using: "BTREE",
        fields: [
          { name: "def_key" },
        ]
      },
      {
        name: "config_status_index",
        using: "BTREE",
        fields: [
          { name: "status" },
        ]
      },
    ]
  });
};
