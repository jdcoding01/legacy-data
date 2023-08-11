const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('os_commission', {
    commission_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    tran_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    booking_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    booking_invited_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    percentage: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    from_commission_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    total_amount: {
      type: DataTypes.DOUBLE(16,2),
      allowNull: false
    },
    commission_shared: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    shared_with_user_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    shared_percentage: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'os_commission',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "commission_id" },
        ]
      },
    ]
  });
};
