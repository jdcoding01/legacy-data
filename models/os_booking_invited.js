const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('os_booking_invited', {
    booking_invite_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    booking_invite_key: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    booking_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    star_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    select_star_type: {
      type: DataTypes.TINYINT,
      allowNull: false,
      comment: "0 = not select, 1 = selected"
    },
    from_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    start_time: {
      type: DataTypes.TIME,
      allowNull: false
    },
    to_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    is_one_day: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    end_time: {
      type: DataTypes.TIME,
      allowNull: false
    },
    currency: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: "USD"
    },
    per_day_amount: {
      type: DataTypes.DOUBLE(16,2),
      allowNull: false
    },
    total_amount: {
      type: DataTypes.DOUBLE(16,2),
      allowNull: false
    },
    payment_status: {
      type: DataTypes.TINYINT,
      allowNull: false,
      comment: "0 = not paid, 1 = paid, 2 = returned"
    },
    booking_status: {
      type: DataTypes.TINYINT,
      allowNull: false,
      comment: "0 = pending, 1 = accepted, 2 = denied, 3 = changed"
    },
    reason: {
      type: DataTypes.STRING(155),
      allowNull: false
    },
    job_status: {
      type: DataTypes.TINYINT,
      allowNull: false,
      comment: "0 = upcoming, 1 = done , 2 = expired"
    },
    verified_status: {
      type: DataTypes.TINYINT,
      allowNull: false,
      comment: "1 = job done, 2 = payment Done"
    },
    star_payment: {
      type: DataTypes.TINYINT,
      allowNull: false,
      comment: "0 = not paid, 1 = paid"
    },
    job_done_verified: {
      type: DataTypes.TINYINT,
      allowNull: false,
      comment: "0 = not job done, 1 =  job done"
    },
    star_payment_verified: {
      type: DataTypes.TINYINT,
      allowNull: false,
      comment: "0 = not paid , 1 = paid"
    },
    is_admin_commission: {
      type: DataTypes.TINYINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'os_booking_invited',
    timestamps: false,
    paranoid: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "booking_invite_id" },
        ]
      },
    ]
  });
};
