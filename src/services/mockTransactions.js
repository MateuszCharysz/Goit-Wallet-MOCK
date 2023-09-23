const Transaction = require('../models/transactions');

const getTransactions = async ({ month = null, year = null }) => {
  try {
    if (!month && !year) {
      return await Transaction.find().lean();
    }

    if (month && year) {
      return await Transaction.find({
        'date.month': month,
        'date.year': year,
      }).lean();
    }

    if (month) {
      return await Transaction.find({
        'date.month': month,
      }).lean();
    }

    if (year) {
      return await Transaction.find({
        'date.year': year,
      }).lean();
    }
  } catch (err) {
    console.error(err.message);
  }
};

const getTransactionById = async id => {
  try {
    return await Transaction.findOne({ _id: id }).lean();
  } catch (err) {
    console.error(err.message);
  }
};

const getTransactionCategory = async id => {
  try {
    const { category } = await Transaction.findOne(
      {
        _id: id,
      },
      { category: 1 },
    ).lean();

    return category;
  } catch (err) {
    console.error(err.message);
  }
};

const createTransaction = async body => {
  try {
    return await Transaction.create(body);
  } catch (err) {
    console.error(err.message);
    throw err;
  }
};

const removeTransaction = async id => {
  try {
    return await Transaction.findOneAndRemove({
      _id: id,
    }).lean();
  } catch (err) {
    console.error(err.message);
  }
};

const updateTransaction = async (id, body) => {
  const opts = {
    new: true,
    runValidators: true,
  };
  try {
    return await Transaction.findOneAndUpdate({ _id: id }, body, opts).lean();
  } catch (err) {
    console.error(err.message);
    throw err;
  }
};
module.exports = {
  getTransactions,
  getTransactionById,
  getTransactionCategory,
  createTransaction,
  removeTransaction,
  updateTransaction,
};
