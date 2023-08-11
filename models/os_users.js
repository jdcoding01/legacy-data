const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('os_users', {
    user_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    user_key: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    remember_token: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    reset_key: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    signup_activation_key: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    token_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    signup_steps: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    role_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    login_user: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    login_pass: {
      type: DataTypes.STRING(155),
      allowNull: false
    },
    salt: {
      type: DataTypes.STRING(155),
      allowNull: false
    },
    sign_file: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    company_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    first_name: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    email_verified: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    display_email_verification_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    id_verify: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    id_verified: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    address: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    city: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    zip: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    about_me: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    phone_number: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    phone_prefix: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    phone_country_iso2: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    verif_code: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    phone_verified: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    display_phone_verification_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    display_invite_and_win_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    birthday: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    is_birthday: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    gender: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    profession: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    company_name: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    paypal_id: {
      type: DataTypes.STRING(55),
      allowNull: true
    },
    paypal_country: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    is_social_login: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    social_login_id: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    social_login_type: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    user_image: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    cover_image: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    gallery_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    cover_gallery_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    user_avatar_set: {
      type: DataTypes.TINYINT,
      allowNull: false,
      comment: "0 = not set, 1 = set"
    },
    profile_view_counter: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    country_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ref_user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    online_status: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    facebook: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    twitter: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    pinterest: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    instagram: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    casting_preference: {
      type: DataTypes.TINYINT,
      allowNull: false,
      comment: "1 = location , 2 = live, 3 = both"
    },
    website_url: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    home_town: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    home_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    home_address: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    home_city: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    home_state: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    home_postal_code: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    home_country: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    home_geo_lat: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    home_geo_lng: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    location: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    venue_name: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    venue_address: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    venue_city: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    venue_state: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    venue_postal_code: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    venue_country: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    geo_lat: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    geo_lng: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    gmt: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    timezone: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    caller_id: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    fcm_token: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    profile_set: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    is_approved: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    is_public: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    profile_updated: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    profile_done: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    available: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    post_as_admin: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    founding_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    owner: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    available_to_trip: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    last_login_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    blocked: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    fake_spam: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    lang_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'os_users',
    timestamps: false,
    paranoid: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "users_role_id_foreign",
        using: "BTREE",
        fields: [
          { name: "role_id" },
        ]
      },
      {
        name: "users_birthday_index",
        using: "BTREE",
        fields: [
          { name: "birthday" },
        ]
      },
      {
        name: "users_user_avatar_set_index",
        using: "BTREE",
        fields: [
          { name: "user_avatar_set" },
        ]
      },
      {
        name: "users_venue_city_index",
        using: "BTREE",
        fields: [
          { name: "venue_city" },
        ]
      },
      {
        name: "users_venue_country_index",
        using: "BTREE",
        fields: [
          { name: "venue_country" },
        ]
      },
      {
        name: "users_blocked_index",
        using: "BTREE",
        fields: [
          { name: "blocked" },
        ]
      },
    ]
  });
};
