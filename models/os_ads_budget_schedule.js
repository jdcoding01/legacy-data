const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('os_ads_budget_schedule', {
    budget_schedule_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    budget_schedule_key: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    budget_type: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      comment: "0 = daily budget, 1 = lifetime budget"
    },
    amount: {
      type: DataTypes.DOUBLE(16,2),
      allowNull: false
    },
    schedule_type: {
      type: DataTypes.TINYINT,
      allowNull: false,
      comment: "0 = Set a start and end date, 1 = Run my advert set continuously starting today"
    },
    start_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    start_time: {
      type: DataTypes.TIME,
      allowNull: false
    },
    end_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    end_time: {
      type: DataTypes.TIME,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'os_ads_budget_schedule',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "budget_schedule_id" },
        ]
      },
    ]
  });
};
