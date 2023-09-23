const service = require('../services/mockTransactions');
const { handleValidationError } = require('../utils/handleErrors');

const get = async (req, res, next) => {
  const { query } = req;
  try {
    const result = await service.getTransactions(query);
    return res.json({ status: 200, statusText: 'OK', data: result });
  } catch (err) {
    next(err);
  }
};

const getById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await service.getTransactionById(id);

    if (result) {
      return res.json({
        status: 200,
        statusText: 'OK',
        data: result,
      });
    }

    return res.status(404).json({
      status: 404,
      statusText: 'Not Found',
      data: `Not found transaction id: ${id}`,
    });
  } catch (err) {
    next(err);
  }
};

const getCategory = async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await service.getTransactionCategory(id);

    if (result) {
      return res.json({
        status: '200',
        statusText: 'OK',
        data: result,
      });
    }

    return res.status(404).json({
      status: '404',
      statusText: 'Not Found',
      data: `Not found transaction id: ${id}`,
    });
  } catch (err) {
    next(err);
  }
};

const create = async (req, res, next) => {
  const transactionData = req.body;
  try {
    const result = await service.createTransaction({
      ...transactionData,
    });

    return res.json({
      status: 201,
      statusText: 'Created',
      data: result,
    });
  } catch (err) {
    handleValidationError(err, res, next);
  }
};

const remove = async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await service.removeTransaction(id);

    if (result) {
      return res.json({
        status: 200,
        statusText: 'OK',
        data: `Transactions ${result._id} deleted`,
      });
    }

    return res.status(404).json({
      status: 404,
      statusText: 'Not Found',
      data: `Not found transaction id: ${id}`,
    });
  } catch (err) {
    next(err);
  }
};

const update = async (req, res, next) => {
  const { id } = req.params;
  const transactionData = req.body;
  try {
    const result = await service.updateTransaction(id, {
      ...transactionData,
    });

    res.json({
      status: 200,
      statusText: 'OK',
      data: result,
    });
  } catch (err) {
    handleValidationError(err, res, next);
  }
};

module.exports = {
  get,
  getById,
  getCategory,
  create,
  remove,
  update,
};
