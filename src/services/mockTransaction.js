const Transaction = require('../models/transactions');

const getTransactions = async () => {
  try {
    return await Transaction.find().lean();
  } catch (err) {
    console.error(err.message);
  }
};

module.exports = {
  getTransactions,
};