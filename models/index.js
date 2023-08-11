'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
//const config = require(__dirname + '/config.json')[env];
const db = {};


const connection = {
  username: "oshinstar",
  password: "oshin2021",
  database: "oshinstar",
  host: "legacydb.clgitci3tgnt.us-east-1.rds.amazonaws.com",
  dialect: "mysql"
}
// psql -h ls-c620ae5d8642ccba3ff9dedb71d245757befac0c.c6civdt5racf.us-east-1.rds.amazonaws.com -p 5432 -U oshinstar -d dboshindb -f core_suggestion.sql
let sequelize = new Sequelize(connection.database, connection.username, connection.password, {logging: false, dialect: 'mysql', define: {timestamps: false}, host: connection.host});



fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes)
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;