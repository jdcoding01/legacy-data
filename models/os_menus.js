const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('os_menus', {
    menu_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    menu_key: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    parent_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    is_dynamic: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    menu_slug: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    menu_text: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    menu_icon: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    menu_title: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    menu_url: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    page_key: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    arrange_order: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'os_menus',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "menu_id" },
        ]
      },
    ]
  });
};
