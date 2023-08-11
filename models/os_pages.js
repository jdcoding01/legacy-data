const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('os_pages', {
    page_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    page_key: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    link_en: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    page_title: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    page_heading: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    page_slug: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    page_meta_keywords: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    page_meta_description: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    page_content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    lang_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'os_pages',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "page_id" },
        ]
      },
    ]
  });
};
