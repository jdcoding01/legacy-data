const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('os_job_invited', {
    job_invite_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    job_invite_key: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    job_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    star_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    can_live: {
      type: DataTypes.TINYINT,
      allowNull: false,
      comment: "model agreed for"
    },
    reply: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    invited: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false,
      comment: "0 = model not accepted, 1 = accepted, 2 = client discarded, 4 = confirmed"
    },
    email_send: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'os_job_invited',
    timestamps: false,
    paranoid: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "job_invite_id" },
        ]
      },
    ]
  });
};
