const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('os_feedback_rating', {
    feedback_rating_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    feedback_rating_key: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    feedback_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    for_user_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      comment: "to whom feedback and rating is given"
    },
    rating: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    rating_type: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'os_feedback_rating',
    timestamps: false,
    paranoid: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "feedback_rating_id" },
        ]
      },
    ]
  });
};
