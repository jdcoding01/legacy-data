const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('os_help_pages_feedback', {
    pages_feedback_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    pages_feedback_key: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    page_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    page_accord_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    type: {
      type: DataTypes.TINYINT,
      allowNull: false,
      comment: "1 = Yes , 2 = No"
    },
    sub_type: {
      type: DataTypes.TINYINT,
      allowNull: false,
      comment: "1 = The information is confusing, 2 = The solution doesnt work, 3 = I dont like the product or policy, 4 = Other"
    },
    feedback: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'os_help_pages_feedback',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "pages_feedback_id" },
        ]
      },
    ]
  });
};
