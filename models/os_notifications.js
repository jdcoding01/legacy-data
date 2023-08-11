const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('os_notifications', {
    notification_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    notification_key: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    from_user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    to_user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    subject: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    notification: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    section_type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "0= message, 1= casting,2= booking, 3 = profile, 4= company, 5 = post like, 6 = post comment, 7 = post comment like, 8 = media like, 9 = media comment, 10 = media comment like"
    },
    sub_section: {
      type: DataTypes.TINYINT,
      allowNull: false,
      comment: "1 = new , 2 = accepted, 3 = denied, 4 = changed, 5= confirm, 6= job done, 7 = job done verified, 8 = payment done, 9 = payment done verified"
    },
    section_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    raw_data: {
      type: DataTypes.BLOB,
      allowNull: false
    },
    is_read: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    country: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    is_range: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'os_notifications',
    timestamps: false,
    paranoid: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "notification_id" },
        ]
      },
    ]
  });
};
