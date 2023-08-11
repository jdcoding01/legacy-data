const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('os_blog_posts', {
    post_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    post_key: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    post_author: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    post_title: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    post_sub_title: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    post_desc: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    post_youtube_video_url: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    post_image: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    lang_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    counter: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'os_blog_posts',
    timestamps: false,
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
