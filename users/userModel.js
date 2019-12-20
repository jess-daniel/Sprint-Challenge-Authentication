const db = require("../database/dbConfig");

const get = () => {
  return db("users");
};

const findById = id => {
  return db("users")
    .first()
    .where({ id });
};

const findBy = filter => {
  return db("users").where(filter);
};

const add = user => {
  return db("users")
    .insert(user, "id")
    .then(ids => {
      [id] = ids;

      return findById(id);
    });
};

module.exports = {
  get,
  findById,
  findBy,
  add
};
