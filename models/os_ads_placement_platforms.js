const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('os_ads_placement_platforms', {
    placement_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    plateform: {
      type: DataTypes.STRING(55),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'os_ads_placement_platforms',
    timestamps: false,
    paranoid: true
  });
};
