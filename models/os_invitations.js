const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('os_invitations', {
    invitation_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    invitation_key: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    type: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      comment: "1 = star, 2 = affiliate, 3 = invitation"
    },
    email: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    message: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      comment: "1 = pending , 2 = joined, 3 = admin approved"
    },
    invitation_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    approved_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    joined_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    amount: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'os_invitations',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "invitation_id" },
        ]
      },
    ]
  });
};
