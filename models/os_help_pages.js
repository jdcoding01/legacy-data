const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('os_help_pages', {
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
    menu_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    is_accordion: {
      type: DataTypes.TINYINT,
      allowNull: false,
      comment: "1 = Accordion , 2 = Article"
    },
    page_title: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    page_heading: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    page_slug: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    page_meta_keywords: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    page_meta_description: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    page_content: {
      type: DataTypes.BLOB,
      allowNull: false
    },
    page_sub_content: {
      type: DataTypes.BLOB,
      allowNull: false
    },
    page_content_edit: {
      type: DataTypes.BLOB,
      allowNull: false
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    bind_slug: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    page_view_counter: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    lang_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    is_popular: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'os_help_pages',
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
