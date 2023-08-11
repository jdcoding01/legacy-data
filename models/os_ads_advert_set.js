const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('os_ads_advert_set', {
    advert_set_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    advert_set_key: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    plan_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    stripe_customer_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    total_clicks: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    clicks_remaining: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    audience_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    placement_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    budget_schedule_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    ads_campaign_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    ads_manager_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    advert_set_name: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    advert_set_for: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'os_ads_advert_set',
    timestamps: false,
    paranoid: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "advert_set_id" },
        ]
      },
    ]
  });
};
