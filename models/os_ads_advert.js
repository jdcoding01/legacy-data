const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('os_ads_advert', {
    advert_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    advert_key: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    advert_title: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    advert_set_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    format: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    link_text: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    profile_card: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false
    },
    see_more_url: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    call_to_action: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    see_more_display_link: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    url_params: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    reason: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    reason_seen: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 1
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false,
      comment: "0 = draft, 1 = pending approval, 2 = approved, 3 = need changes, 4 = out of clicks"
    },
    is_active: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    is_admin_approved: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'os_ads_advert',
    timestamps: false,
    paranoid: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "advert_id" },
        ]
      },
    ]
  });
};
