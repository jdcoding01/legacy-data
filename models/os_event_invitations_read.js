const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('os_event_invitations_read', {
    invitation_read_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    invitation_read_key: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    event_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    is_read: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'os_event_invitations_read',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "invitation_read_id" },
        ]
      },
    ]
  });
};
