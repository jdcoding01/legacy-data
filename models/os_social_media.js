const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('os_social_media', {
    media_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    media_key: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    file_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    type: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    is_post: {
      type: DataTypes.TINYINT,
      allowNull: false,
      comment: "0 = post, 1 = profile, 2 = business"
    },
    is_polaroid: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    source: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    cover_image: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    raw_data: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    is_ready: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    duration: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    custom_link: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'os_social_media',
    timestamps: false,
    paranoid: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "media_id" },
        ]
      },
    ]
  });
};
