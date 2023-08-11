const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('os_block_user', {
    block_user_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    block_user_key: {
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
    status: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'os_block_user',
    timestamps: false,
    paranoid: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "block_user_id" },
        ]
      },
    ]
  });
};
