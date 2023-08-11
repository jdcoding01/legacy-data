const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('os_help_pages_accord', {
    page_accord_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    page_accord_key: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    menu_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    page_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    page_accord_title: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    page_accord_heading: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    page_accord_slug: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    page_accord_meta_keywords: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    page_accord_meta_description: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    page_accord_content: {
      type: DataTypes.BLOB,
      allowNull: false
    },
    page_content_edit: {
      type: DataTypes.BLOB,
      allowNull: false
    },
    accord_view_counter: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    is_popular: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    lang_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'os_help_pages_accord',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "page_accord_id" },
        ]
      },
    ]
  });
};
