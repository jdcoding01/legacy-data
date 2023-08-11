const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('os_social_posts', {
    post_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    timeline_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    parent_post_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    active: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    location: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    venue_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    venue_address: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    venue_city: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    venue_state: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    venue_postal_code: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    venue_country: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    geo_lng: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    geo_lat: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    type: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    in_progress: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    is_admin: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    type_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    type_sub_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    type_sec: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    is_disable_comment: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "0 = can comment, 1 = can not comment"
    },
    view_privacy: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "0 = everyone, 1 = only followers"
    },
    is_scheduled: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    is_archived: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    post_close_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    publish_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    publish_time: {
      type: DataTypes.TIME,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'os_social_posts',
    timestamps: false,
    paranoid: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "post_id" },
        ]
      },
    ]
  });
};
