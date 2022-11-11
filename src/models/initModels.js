const Users = require("./users.models");
const Tasks = require("./tasks.models");
const TaskCategories = require("./tasksCategories.models");
const Categories = require("./categories.models");
const Addresses = require("./addresses.models");

const initModels = () => {
  Tasks.belongsTo(Users, { as: "author", foreignKey: "user_id" });
  Users.hasMany(Tasks, { as: "todos", foreignKey: "user_id" });

  Addresses.belongsTo(Users, { as: "resident", foreignKey: "user_id" });
  Users.hasOne(Addresses, { ass: "home", foreignKey: "user_id" });

  TaskCategories.belongsTo(Tasks, {
    as: "todos",
    foreignKey: "task_id",
  });
  Tasks.hasMany(TaskCategories, {
    as: "categories",
    foreignKey: "task_id",
  });

  TaskCategories.belongsTo(Categories, {
    as: "category",
    foreignKey: "category_id",
  });
  Categories.hasMany(TaskCategories, {
    as: "todos",
    foreignKey: "category_id",
  });
};

module.exports = initModels;
