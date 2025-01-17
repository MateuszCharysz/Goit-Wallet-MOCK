const User = require("../models/users");

const getUser = async query => {
  try {
    return await User.findOne(query).lean();
  } catch (err) {
    console.error(err.message);
  }
};

const createUser = async body => {
  try {
    return new User(body);
  } catch (err) {
    console.error(err.message);
  }
};

const updateUser = async (query, body) => {
  try {
    return await User.findOneAndUpdate(query, body, {
      new: true,
    }).lean();
  } catch (err) {
    console.error(err.message);
  }
};

module.exports = {
  getUser,
  createUser,
  updateUser,
};
