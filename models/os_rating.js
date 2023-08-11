const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('os_rating', {
    rating_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    rating_key: {
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
    },
    rating: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'os_rating',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "rating_id" },
        ]
      },
    ]
  });
};
