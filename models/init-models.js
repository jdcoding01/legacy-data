var DataTypes = require("sequelize").DataTypes;
var _os_ads_advert = require("./os_ads_advert");
var _os_ads_advert_formats = require("./os_ads_advert_formats");
var _os_ads_advert_set = require("./os_ads_advert_set");
var _os_ads_advert_set_plan_purchased = require("./os_ads_advert_set_plan_purchased");
var _os_ads_audience = require("./os_ads_audience");
var _os_ads_audience_languages = require("./os_ads_audience_languages");
var _os_ads_audience_lifework = require("./os_ads_audience_lifework");
var _os_ads_audience_location = require("./os_ads_audience_location");
var _os_ads_budget_schedule = require("./os_ads_budget_schedule");
var _os_ads_campaign = require("./os_ads_campaign");
var _os_ads_click_history = require("./os_ads_click_history");
var _os_ads_clicks = require("./os_ads_clicks");
var _os_ads_display = require("./os_ads_display");
var _os_ads_lang = require("./os_ads_lang");
var _os_ads_manager = require("./os_ads_manager");
var _os_ads_placement_platforms = require("./os_ads_placement_platforms");
var _os_ads_placements = require("./os_ads_placements");
var _os_ads_plans = require("./os_ads_plans");
var _os_ads_set_for_user = require("./os_ads_set_for_user");
var _os_ads_stripe_customers = require("./os_ads_stripe_customers");
var _os_analyse = require("./os_analyse");
var _os_audience_user = require("./os_audience_user");
var _os_audiences = require("./os_audiences");
var _os_block_user = require("./os_block_user");
var _os_blog_comments = require("./os_blog_comments");
var _os_blog_post_tags = require("./os_blog_post_tags");
var _os_blog_posts = require("./os_blog_posts");
var _os_blog_tags = require("./os_blog_tags");
var _os_booking = require("./os_booking");
var _os_booking_invited = require("./os_booking_invited");
var _os_categories = require("./os_categories");
var _os_category_module = require("./os_category_module");
var _os_category_skill = require("./os_category_skill");
var _os_category_user = require("./os_category_user");
var _os_channel_notification = require("./os_channel_notification");
var _os_cities = require("./os_cities");
var _os_commission = require("./os_commission");
var _os_config = require("./os_config");
var _os_contact = require("./os_contact");
var _os_contract_history = require("./os_contract_history");
var _os_conversations = require("./os_conversations");
var _os_countries = require("./os_countries");
var _os_currency_rates = require("./os_currency_rates");
var _os_email_sent = require("./os_email_sent");
var _os_email_sent_backup = require("./os_email_sent_backup");
var _os_event_additional_setting = require("./os_event_additional_setting");
var _os_event_date_time_setting = require("./os_event_date_time_setting");
var _os_event_invitations_mail = require("./os_event_invitations_mail");
var _os_event_invitations_read = require("./os_event_invitations_read");
var _os_event_multi_schedule = require("./os_event_multi_schedule");
var _os_event_save = require("./os_event_save");
var _os_event_ticket_payment = require("./os_event_ticket_payment");
var _os_event_ticket_purchase = require("./os_event_ticket_purchase");
var _os_event_ticket_tags = require("./os_event_ticket_tags");
var _os_event_tickets = require("./os_event_tickets");
var _os_event_topic = require("./os_event_topic");
var _os_events = require("./os_events");
var _os_favorite = require("./os_favorite");
var _os_feature_field_types = require("./os_feature_field_types");
var _os_feature_user_value = require("./os_feature_user_value");
var _os_feature_values = require("./os_feature_values");
var _os_features = require("./os_features");
var _os_feedback = require("./os_feedback");
var _os_feedback_rating = require("./os_feedback_rating");
var _os_finance_sheet = require("./os_finance_sheet");
var _os_followers = require("./os_followers");
var _os_help_menus = require("./os_help_menus");
var _os_help_pages = require("./os_help_pages");
var _os_help_pages_accord = require("./os_help_pages_accord");
var _os_help_pages_feedback = require("./os_help_pages_feedback");
var _os_industries = require("./os_industries");
var _os_invitations = require("./os_invitations");
var _os_job = require("./os_job");
var _os_job_invited = require("./os_job_invited");
var _os_languages = require("./os_languages");
var _os_level_skill = require("./os_level_skill");
var _os_massive_notification_channels = require("./os_massive_notification_channels");
var _os_massive_notifications = require("./os_massive_notifications");
var _os_mdl_features = require("./os_mdl_features");
var _os_mdl_features_date = require("./os_mdl_features_date");
var _os_mdl_features_fields = require("./os_mdl_features_fields");
var _os_mdl_features_fields_cust = require("./os_mdl_features_fields_cust");
var _os_mdl_hobbies = require("./os_mdl_hobbies");
var _os_mdl_module = require("./os_mdl_module");
var _os_mdl_module_linked = require("./os_mdl_module_linked");
var _os_mdl_module_skills = require("./os_mdl_module_skills");
var _os_mdl_place_types = require("./os_mdl_place_types");
var _os_mdl_place_types_linked = require("./os_mdl_place_types_linked");
var _os_mdl_skills = require("./os_mdl_skills");
var _os_menus = require("./os_menus");
var _os_message_head = require("./os_message_head");
var _os_messages = require("./os_messages");
var _os_migrations = require("./os_migrations");
var _os_module_skill = require("./os_module_skill");
var _os_modules = require("./os_modules");
var _os_newsletter = require("./os_newsletter");
var _os_notifications = require("./os_notifications");
var _os_occupations = require("./os_occupations");
var _os_occupations_linked = require("./os_occupations_linked");
var _os_pages = require("./os_pages");
var _os_payment_accounts = require("./os_payment_accounts");
var _os_permission_role = require("./os_permission_role");
var _os_permissions = require("./os_permissions");
var _os_poll_option = require("./os_poll_option");
var _os_poll_voting = require("./os_poll_voting");
var _os_polls = require("./os_polls");
var _os_portfolio = require("./os_portfolio");
var _os_portfolio_images = require("./os_portfolio_images");
var _os_preferences = require("./os_preferences");
var _os_rating = require("./os_rating");
var _os_regions = require("./os_regions");
var _os_roles = require("./os_roles");
var _os_skill_levels = require("./os_skill_levels");
var _os_skills = require("./os_skills");
var _os_social_comment_likes = require("./os_social_comment_likes");
var _os_social_comments = require("./os_social_comments");
var _os_social_media = require("./os_social_media");
var _os_social_media_views = require("./os_social_media_views");
var _os_social_post_follows = require("./os_social_post_follows");
var _os_social_post_hide = require("./os_social_post_hide");
var _os_social_post_likes = require("./os_social_post_likes");
var _os_social_post_media = require("./os_social_post_media");
var _os_social_post_notifications = require("./os_social_post_notifications");
var _os_social_post_reports = require("./os_social_post_reports");
var _os_social_post_shares = require("./os_social_post_shares");
var _os_social_post_tagged_users = require("./os_social_post_tagged_users");
var _os_social_post_tags = require("./os_social_post_tags");
var _os_social_posts = require("./os_social_posts");
var _os_social_tagged_users = require("./os_social_tagged_users");
var _os_states = require("./os_states");
var _os_subscriber = require("./os_subscriber");
var _os_temp_phone_verify = require("./os_temp_phone_verify");
var _os_themes = require("./os_themes");
var _os_timezones = require("./os_timezones");
var _os_transactions = require("./os_transactions");
var _os_transactions_copy2 = require("./os_transactions_copy2");
var _os_user_hobbies = require("./os_user_hobbies");
var _os_user_languages = require("./os_user_languages");
var _os_user_lifework = require("./os_user_lifework");
var _os_user_module = require("./os_user_module");
var _os_user_module_auto_c = require("./os_user_module_auto_c");
var _os_user_module_values = require("./os_user_module_values");
var _os_user_preferences = require("./os_user_preferences");
var _os_user_profile = require("./os_user_profile");
var _os_user_registration_attempts = require("./os_user_registration_attempts");
var _os_user_skills = require("./os_user_skills");
var _os_user_visit_history = require("./os_user_visit_history");
var _os_users = require("./os_users");
var _os_users_old = require("./os_users_old");
var _os_withdraw = require("./os_withdraw");

function initModels(sequelize) {
  var os_ads_advert = _os_ads_advert(sequelize, DataTypes);
  var os_ads_advert_formats = _os_ads_advert_formats(sequelize, DataTypes);
  var os_ads_advert_set = _os_ads_advert_set(sequelize, DataTypes);
  var os_ads_advert_set_plan_purchased = _os_ads_advert_set_plan_purchased(sequelize, DataTypes);
  var os_ads_audience = _os_ads_audience(sequelize, DataTypes);
  var os_ads_audience_languages = _os_ads_audience_languages(sequelize, DataTypes);
  var os_ads_audience_lifework = _os_ads_audience_lifework(sequelize, DataTypes);
  var os_ads_audience_location = _os_ads_audience_location(sequelize, DataTypes);
  var os_ads_budget_schedule = _os_ads_budget_schedule(sequelize, DataTypes);
  var os_ads_campaign = _os_ads_campaign(sequelize, DataTypes);
  var os_ads_click_history = _os_ads_click_history(sequelize, DataTypes);
  var os_ads_clicks = _os_ads_clicks(sequelize, DataTypes);
  var os_ads_display = _os_ads_display(sequelize, DataTypes);
  var os_ads_lang = _os_ads_lang(sequelize, DataTypes);
  var os_ads_manager = _os_ads_manager(sequelize, DataTypes);
  var os_ads_placement_platforms = _os_ads_placement_platforms(sequelize, DataTypes);
  var os_ads_placements = _os_ads_placements(sequelize, DataTypes);
  var os_ads_plans = _os_ads_plans(sequelize, DataTypes);
  var os_ads_set_for_user = _os_ads_set_for_user(sequelize, DataTypes);
  var os_ads_stripe_customers = _os_ads_stripe_customers(sequelize, DataTypes);
  var os_analyse = _os_analyse(sequelize, DataTypes);
  var os_audience_user = _os_audience_user(sequelize, DataTypes);
  var os_audiences = _os_audiences(sequelize, DataTypes);
  var os_block_user = _os_block_user(sequelize, DataTypes);
  var os_blog_comments = _os_blog_comments(sequelize, DataTypes);
  var os_blog_post_tags = _os_blog_post_tags(sequelize, DataTypes);
  var os_blog_posts = _os_blog_posts(sequelize, DataTypes);
  var os_blog_tags = _os_blog_tags(sequelize, DataTypes);
  var os_booking = _os_booking(sequelize, DataTypes);
  var os_booking_invited = _os_booking_invited(sequelize, DataTypes);
  var os_categories = _os_categories(sequelize, DataTypes);
  var os_category_module = _os_category_module(sequelize, DataTypes);
  var os_category_skill = _os_category_skill(sequelize, DataTypes);
  var os_category_user = _os_category_user(sequelize, DataTypes);
  var os_channel_notification = _os_channel_notification(sequelize, DataTypes);
  var os_cities = _os_cities(sequelize, DataTypes);
  var os_commission = _os_commission(sequelize, DataTypes);
  var os_config = _os_config(sequelize, DataTypes);
  var os_contact = _os_contact(sequelize, DataTypes);
  var os_contract_history = _os_contract_history(sequelize, DataTypes);
  var os_conversations = _os_conversations(sequelize, DataTypes);
  var os_countries = _os_countries(sequelize, DataTypes);
  var os_currency_rates = _os_currency_rates(sequelize, DataTypes);
  var os_email_sent = _os_email_sent(sequelize, DataTypes);
  var os_email_sent_backup = _os_email_sent_backup(sequelize, DataTypes);
  var os_event_additional_setting = _os_event_additional_setting(sequelize, DataTypes);
  var os_event_date_time_setting = _os_event_date_time_setting(sequelize, DataTypes);
  var os_event_invitations_mail = _os_event_invitations_mail(sequelize, DataTypes);
  var os_event_invitations_read = _os_event_invitations_read(sequelize, DataTypes);
  var os_event_multi_schedule = _os_event_multi_schedule(sequelize, DataTypes);
  var os_event_save = _os_event_save(sequelize, DataTypes);
  var os_event_ticket_payment = _os_event_ticket_payment(sequelize, DataTypes);
  var os_event_ticket_purchase = _os_event_ticket_purchase(sequelize, DataTypes);
  var os_event_ticket_tags = _os_event_ticket_tags(sequelize, DataTypes);
  var os_event_tickets = _os_event_tickets(sequelize, DataTypes);
  var os_event_topic = _os_event_topic(sequelize, DataTypes);
  var os_events = _os_events(sequelize, DataTypes);
  var os_favorite = _os_favorite(sequelize, DataTypes);
  var os_feature_field_types = _os_feature_field_types(sequelize, DataTypes);
  var os_feature_user_value = _os_feature_user_value(sequelize, DataTypes);
  var os_feature_values = _os_feature_values(sequelize, DataTypes);
  var os_features = _os_features(sequelize, DataTypes);
  var os_feedback = _os_feedback(sequelize, DataTypes);
  var os_feedback_rating = _os_feedback_rating(sequelize, DataTypes);
  var os_finance_sheet = _os_finance_sheet(sequelize, DataTypes);
  var os_followers = _os_followers(sequelize, DataTypes);
  var os_help_menus = _os_help_menus(sequelize, DataTypes);
  var os_help_pages = _os_help_pages(sequelize, DataTypes);
  var os_help_pages_accord = _os_help_pages_accord(sequelize, DataTypes);
  var os_help_pages_feedback = _os_help_pages_feedback(sequelize, DataTypes);
  var os_industries = _os_industries(sequelize, DataTypes);
  var os_invitations = _os_invitations(sequelize, DataTypes);
  var os_job = _os_job(sequelize, DataTypes);
  var os_job_invited = _os_job_invited(sequelize, DataTypes);
  var os_languages = _os_languages(sequelize, DataTypes);
  var os_level_skill = _os_level_skill(sequelize, DataTypes);
  var os_massive_notification_channels = _os_massive_notification_channels(sequelize, DataTypes);
  var os_massive_notifications = _os_massive_notifications(sequelize, DataTypes);
  var os_mdl_features = _os_mdl_features(sequelize, DataTypes);
  var os_mdl_features_date = _os_mdl_features_date(sequelize, DataTypes);
  var os_mdl_features_fields = _os_mdl_features_fields(sequelize, DataTypes);
  var os_mdl_features_fields_cust = _os_mdl_features_fields_cust(sequelize, DataTypes);
  var os_mdl_hobbies = _os_mdl_hobbies(sequelize, DataTypes);
  var os_mdl_module = _os_mdl_module(sequelize, DataTypes);
  var os_mdl_module_linked = _os_mdl_module_linked(sequelize, DataTypes);
  var os_mdl_module_skills = _os_mdl_module_skills(sequelize, DataTypes);
  var os_mdl_place_types = _os_mdl_place_types(sequelize, DataTypes);
  var os_mdl_place_types_linked = _os_mdl_place_types_linked(sequelize, DataTypes);
  var os_mdl_skills = _os_mdl_skills(sequelize, DataTypes);
  var os_menus = _os_menus(sequelize, DataTypes);
  var os_message_head = _os_message_head(sequelize, DataTypes);
  var os_messages = _os_messages(sequelize, DataTypes);
  var os_migrations = _os_migrations(sequelize, DataTypes);
  var os_module_skill = _os_module_skill(sequelize, DataTypes);
  var os_modules = _os_modules(sequelize, DataTypes);
  var os_newsletter = _os_newsletter(sequelize, DataTypes);
  var os_notifications = _os_notifications(sequelize, DataTypes);
  var os_occupations = _os_occupations(sequelize, DataTypes);
  var os_occupations_linked = _os_occupations_linked(sequelize, DataTypes);
  var os_pages = _os_pages(sequelize, DataTypes);
  var os_payment_accounts = _os_payment_accounts(sequelize, DataTypes);
  var os_permission_role = _os_permission_role(sequelize, DataTypes);
  var os_permissions = _os_permissions(sequelize, DataTypes);
  var os_poll_option = _os_poll_option(sequelize, DataTypes);
  var os_poll_voting = _os_poll_voting(sequelize, DataTypes);
  var os_polls = _os_polls(sequelize, DataTypes);
  var os_portfolio = _os_portfolio(sequelize, DataTypes);
  var os_portfolio_images = _os_portfolio_images(sequelize, DataTypes);
  var os_preferences = _os_preferences(sequelize, DataTypes);
  var os_rating = _os_rating(sequelize, DataTypes);
  var os_regions = _os_regions(sequelize, DataTypes);
  var os_roles = _os_roles(sequelize, DataTypes);
  var os_skill_levels = _os_skill_levels(sequelize, DataTypes);
  var os_skills = _os_skills(sequelize, DataTypes);
  var os_social_comment_likes = _os_social_comment_likes(sequelize, DataTypes);
  var os_social_comments = _os_social_comments(sequelize, DataTypes);
  var os_social_media = _os_social_media(sequelize, DataTypes);
  var os_social_media_views = _os_social_media_views(sequelize, DataTypes);
  var os_social_post_follows = _os_social_post_follows(sequelize, DataTypes);
  var os_social_post_hide = _os_social_post_hide(sequelize, DataTypes);
  var os_social_post_likes = _os_social_post_likes(sequelize, DataTypes);
  var os_social_post_media = _os_social_post_media(sequelize, DataTypes);
  var os_social_post_notifications = _os_social_post_notifications(sequelize, DataTypes);
  var os_social_post_reports = _os_social_post_reports(sequelize, DataTypes);
  var os_social_post_shares = _os_social_post_shares(sequelize, DataTypes);
  var os_social_post_tagged_users = _os_social_post_tagged_users(sequelize, DataTypes);
  var os_social_post_tags = _os_social_post_tags(sequelize, DataTypes);
  var os_social_posts = _os_social_posts(sequelize, DataTypes);
  var os_social_tagged_users = _os_social_tagged_users(sequelize, DataTypes);
  var os_states = _os_states(sequelize, DataTypes);
  var os_subscriber = _os_subscriber(sequelize, DataTypes);
  var os_temp_phone_verify = _os_temp_phone_verify(sequelize, DataTypes);
  var os_themes = _os_themes(sequelize, DataTypes);
  var os_timezones = _os_timezones(sequelize, DataTypes);
  var os_transactions = _os_transactions(sequelize, DataTypes);
  var os_transactions_copy2 = _os_transactions_copy2(sequelize, DataTypes);
  var os_user_hobbies = _os_user_hobbies(sequelize, DataTypes);
  var os_user_languages = _os_user_languages(sequelize, DataTypes);
  var os_user_lifework = _os_user_lifework(sequelize, DataTypes);
  var os_user_module = _os_user_module(sequelize, DataTypes);
  var os_user_module_auto_c = _os_user_module_auto_c(sequelize, DataTypes);
  var os_user_module_values = _os_user_module_values(sequelize, DataTypes);
  var os_user_preferences = _os_user_preferences(sequelize, DataTypes);
  var os_user_profile = _os_user_profile(sequelize, DataTypes);
  var os_user_registration_attempts = _os_user_registration_attempts(sequelize, DataTypes);
  var os_user_skills = _os_user_skills(sequelize, DataTypes);
  var os_user_visit_history = _os_user_visit_history(sequelize, DataTypes);
  var os_users = _os_users(sequelize, DataTypes);
  var os_users_old = _os_users_old(sequelize, DataTypes);
  var os_withdraw = _os_withdraw(sequelize, DataTypes);

  os_audience_user.belongsTo(os_audiences, { as: "audience", foreignKey: "audience_id"});
  os_audiences.hasMany(os_audience_user, { as: "os_audience_users", foreignKey: "audience_id"});
  os_massive_notifications.belongsTo(os_audiences, { as: "audience", foreignKey: "audience_id"});
  os_audiences.hasMany(os_massive_notifications, { as: "os_massive_notifications", foreignKey: "audience_id"});
  os_category_module.belongsTo(os_categories, { as: "category", foreignKey: "category_id"});
  os_categories.hasMany(os_category_module, { as: "os_category_modules", foreignKey: "category_id"});
  os_category_skill.belongsTo(os_categories, { as: "category", foreignKey: "category_id"});
  os_categories.hasMany(os_category_skill, { as: "os_category_skills", foreignKey: "category_id"});
  os_category_user.belongsTo(os_categories, { as: "category", foreignKey: "category_id"});
  os_categories.hasMany(os_category_user, { as: "os_category_users", foreignKey: "category_id"});
  os_feature_user_value.belongsTo(os_feature_values, { as: "value", foreignKey: "value_id"});
  os_feature_values.hasMany(os_feature_user_value, { as: "os_feature_user_values", foreignKey: "value_id"});
  os_feature_user_value.belongsTo(os_features, { as: "feature", foreignKey: "feature_id"});
  os_features.hasMany(os_feature_user_value, { as: "os_feature_user_values", foreignKey: "feature_id"});
  os_feature_values.belongsTo(os_features, { as: "feature", foreignKey: "feature_id"});
  os_features.hasMany(os_feature_values, { as: "os_feature_values", foreignKey: "feature_id"});
  os_categories.belongsTo(os_industries, { as: "industry", foreignKey: "industry_id"});
  os_industries.hasMany(os_categories, { as: "os_categories", foreignKey: "industry_id"});
  os_channel_notification.belongsTo(os_massive_notification_channels, { as: "channel", foreignKey: "channel_id"});
  os_massive_notification_channels.hasMany(os_channel_notification, { as: "os_channel_notifications", foreignKey: "channel_id"});
  os_channel_notification.belongsTo(os_massive_notifications, { as: "notification", foreignKey: "notification_id"});
  os_massive_notifications.hasMany(os_channel_notification, { as: "os_channel_notifications", foreignKey: "notification_id"});
  os_category_module.belongsTo(os_modules, { as: "module", foreignKey: "module_id"});
  os_modules.hasMany(os_category_module, { as: "os_category_modules", foreignKey: "module_id"});
  os_module_skill.belongsTo(os_modules, { as: "module", foreignKey: "module_id"});
  os_modules.hasMany(os_module_skill, { as: "os_module_skills", foreignKey: "module_id"});
  os_users_old.belongsTo(os_roles, { as: "role", foreignKey: "role_id"});
  os_roles.hasMany(os_users_old, { as: "os_users_olds", foreignKey: "role_id"});
  os_level_skill.belongsTo(os_skill_levels, { as: "level", foreignKey: "level_id"});
  os_skill_levels.hasMany(os_level_skill, { as: "os_level_skills", foreignKey: "level_id"});
  os_category_skill.belongsTo(os_skills, { as: "skill", foreignKey: "skill_id"});
  os_skills.hasMany(os_category_skill, { as: "os_category_skills", foreignKey: "skill_id"});
  os_level_skill.belongsTo(os_skills, { as: "skill", foreignKey: "skill_id"});
  os_skills.hasMany(os_level_skill, { as: "os_level_skills", foreignKey: "skill_id"});
  os_module_skill.belongsTo(os_skills, { as: "skill", foreignKey: "skill_id"});
  os_skills.hasMany(os_module_skill, { as: "os_module_skills", foreignKey: "skill_id"});
  os_audience_user.belongsTo(os_users, { as: "user", foreignKey: "user_id"});
  os_users.hasMany(os_audience_user, { as: "os_audience_users", foreignKey: "user_id"});
  os_audiences.belongsTo(os_users, { as: "user", foreignKey: "user_id"});
  os_users.hasMany(os_audiences, { as: "os_audiences", foreignKey: "user_id"});
  os_category_user.belongsTo(os_users, { as: "user", foreignKey: "user_id"});
  os_users.hasMany(os_category_user, { as: "os_category_users", foreignKey: "user_id"});
  os_conversations.belongsTo(os_users, { as: "user_to", foreignKey: "user_to_id"});
  os_users.hasMany(os_conversations, { as: "os_conversations", foreignKey: "user_to_id"});
  os_feature_user_value.belongsTo(os_users, { as: "user", foreignKey: "user_id"});
  os_users.hasMany(os_feature_user_value, { as: "os_feature_user_values", foreignKey: "user_id"});
  os_skills.belongsTo(os_users, { as: "user", foreignKey: "user_id"});
  os_users.hasMany(os_skills, { as: "os_skills", foreignKey: "user_id"});
  os_user_registration_attempts.belongsTo(os_users, { as: "user", foreignKey: "user_id"});
  os_users.hasMany(os_user_registration_attempts, { as: "os_user_registration_attempts", foreignKey: "user_id"});

  return {
    os_ads_advert,
    os_ads_advert_formats,
    os_ads_advert_set,
    os_ads_advert_set_plan_purchased,
    os_ads_audience,
    os_ads_audience_languages,
    os_ads_audience_lifework,
    os_ads_audience_location,
    os_ads_budget_schedule,
    os_ads_campaign,
    os_ads_click_history,
    os_ads_clicks,
    os_ads_display,
    os_ads_lang,
    os_ads_manager,
    os_ads_placement_platforms,
    os_ads_placements,
    os_ads_plans,
    os_ads_set_for_user,
    os_ads_stripe_customers,
    os_analyse,
    os_audience_user,
    os_audiences,
    os_block_user,
    os_blog_comments,
    os_blog_post_tags,
    os_blog_posts,
    os_blog_tags,
    os_booking,
    os_booking_invited,
    os_categories,
    os_category_module,
    os_category_skill,
    os_category_user,
    os_channel_notification,
    os_cities,
    os_commission,
    os_config,
    os_contact,
    os_contract_history,
    os_conversations,
    os_countries,
    os_currency_rates,
    os_email_sent,
    os_email_sent_backup,
    os_event_additional_setting,
    os_event_date_time_setting,
    os_event_invitations_mail,
    os_event_invitations_read,
    os_event_multi_schedule,
    os_event_save,
    os_event_ticket_payment,
    os_event_ticket_purchase,
    os_event_ticket_tags,
    os_event_tickets,
    os_event_topic,
    os_events,
    os_favorite,
    os_feature_field_types,
    os_feature_user_value,
    os_feature_values,
    os_features,
    os_feedback,
    os_feedback_rating,
    os_finance_sheet,
    os_followers,
    os_help_menus,
    os_help_pages,
    os_help_pages_accord,
    os_help_pages_feedback,
    os_industries,
    os_invitations,
    os_job,
    os_job_invited,
    os_languages,
    os_level_skill,
    os_massive_notification_channels,
    os_massive_notifications,
    os_mdl_features,
    os_mdl_features_date,
    os_mdl_features_fields,
    os_mdl_features_fields_cust,
    os_mdl_hobbies,
    os_mdl_module,
    os_mdl_module_linked,
    os_mdl_module_skills,
    os_mdl_place_types,
    os_mdl_place_types_linked,
    os_mdl_skills,
    os_menus,
    os_message_head,
    os_messages,
    os_migrations,
    os_module_skill,
    os_modules,
    os_newsletter,
    os_notifications,
    os_occupations,
    os_occupations_linked,
    os_pages,
    os_payment_accounts,
    os_permission_role,
    os_permissions,
    os_poll_option,
    os_poll_voting,
    os_polls,
    os_portfolio,
    os_portfolio_images,
    os_preferences,
    os_rating,
    os_regions,
    os_roles,
    os_skill_levels,
    os_skills,
    os_social_comment_likes,
    os_social_comments,
    os_social_media,
    os_social_media_views,
    os_social_post_follows,
    os_social_post_hide,
    os_social_post_likes,
    os_social_post_media,
    os_social_post_notifications,
    os_social_post_reports,
    os_social_post_shares,
    os_social_post_tagged_users,
    os_social_post_tags,
    os_social_posts,
    os_social_tagged_users,
    os_states,
    os_subscriber,
    os_temp_phone_verify,
    os_themes,
    os_timezones,
    os_transactions,
    os_transactions_copy2,
    os_user_hobbies,
    os_user_languages,
    os_user_lifework,
    os_user_module,
    os_user_module_auto_c,
    os_user_module_values,
    os_user_preferences,
    os_user_profile,
    os_user_registration_attempts,
    os_user_skills,
    os_user_visit_history,
    os_users,
    os_users_old,
    os_withdraw,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
