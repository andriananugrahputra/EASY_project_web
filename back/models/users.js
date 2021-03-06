'use strict';
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    fullname: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    is_active: DataTypes.BOOLEAN
  }, {});
  users.associate = function(models) {
    // associations can be defined here
    // users.belongsToMany(models.categories, {
    //   through: models.articles,
    //   as: "categories",
    //   foreignKey: "author_id"
    // });
    users.hasMany(models.articles, {
      as: "user",
      foreignKey: "author_id"
    });
  };
  return users;
};