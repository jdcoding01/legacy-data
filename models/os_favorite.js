const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('os_favorite', {
    favorite_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    favorite_key: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    from_user_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    to_user_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'os_favorite',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "favorite_id" },
        ]
      },
    ]
  });
};
