const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('os_event_ticket_tags', {
    tag_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    tag_key: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    ticket_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    event_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    tag_name: {
      type: DataTypes.STRING(55),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'os_event_ticket_tags',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "tag_id" },
        ]
      },
    ]
  });
};
