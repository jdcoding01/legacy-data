const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('os_themes', {
    theme_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    theme_key: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    fixed_pos: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    theme_name: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    theme_slug: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    theme_path: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    theme_image_shot: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'os_themes',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "theme_id" },
        ]
      },
    ]
  });
};
