const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('os_user_profile', {
    user_profile_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    ethnicity: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    comp_tel_no: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    comp_email: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    height: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    weight: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    shoes_w: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    shoes_m: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    hair_color: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    hair_length: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    eye_color: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    skin_color: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    build: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    cup_size: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    dress: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    jacket: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    chest_bust: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    waist: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    hips: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    trousers: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    collar: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    user_cat: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    phone_prefix: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    phone_country_iso2: {
      type: DataTypes.STRING(55),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'os_user_profile',
    timestamps: false,
    paranoid: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "user_profile_id" },
        ]
      },
      {
        name: "user_profile_user_id_index",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  });
};
