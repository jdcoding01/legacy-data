const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('os_job', {
    job_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    job_key: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    lifework: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    skills: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    job_type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "1 = audience, 2 = job, 3 = casting "
    },
    job_title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    job_description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    currency: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    payment_info: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    location: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    venue_name: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    venue_address: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    venue_city: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    venue_state: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    venue_postal_code: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    venue_country: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    geo_lng: {
      type: DataTypes.DECIMAL(11,8),
      allowNull: false
    },
    geo_lat: {
      type: DataTypes.DECIMAL(11,8),
      allowNull: false
    },
    is_live: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    from_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    start_time: {
      type: DataTypes.TIME,
      allowNull: false
    },
    to_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    end_time: {
      type: DataTypes.TIME,
      allowNull: false
    },
    is_one_day: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    expires_at: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false,
      comment: "0 = not published, 1 = published, 3 = archieve"
    },
    is_private: {
      type: DataTypes.TINYINT,
      allowNull: false,
      comment: "0 = public , 1 = private"
    },
    email_send: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'os_job',
    timestamps: false,
    paranoid: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "job_id" },
        ]
      },
    ]
  });
};
