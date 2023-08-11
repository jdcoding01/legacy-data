const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('os_feedback', {
    feedback_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    feedback_key: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    type: {
      type: DataTypes.TINYINT,
      allowNull: false,
      comment: "1 = user to model, 2 = model to user"
    },
    client_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    client_feedback: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "user will give feedback to client"
    },
    user_feedback: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "client will give feedback to model or user"
    },
    feedback_for_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    feedback_for_type: {
      type: DataTypes.TINYINT,
      allowNull: false,
      comment: "1 = booking , 2 = casting"
    }
  }, {
    sequelize,
    tableName: 'os_feedback',
    timestamps: false,
    paranoid: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "feedback_id" },
        ]
      },
    ]
  });
};
