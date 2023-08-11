const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('os_event_multi_schedule', {
    schedule_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    event_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    event_occur: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "1 = daily, 2 = weekly, 3 = monthly, 4 = custom"
    },
    from_time: {
      type: DataTypes.TIME,
      allowNull: false
    },
    to_time: {
      type: DataTypes.TIME,
      allowNull: false
    },
    finished_day: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    day_of_week: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    reporting_every_day: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    reporting_select_day: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    start_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    end_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'os_event_multi_schedule',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "schedule_id" },
        ]
      },
    ]
  });
};
