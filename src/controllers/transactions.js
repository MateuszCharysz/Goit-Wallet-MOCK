const service = require('../services/mockTransaction');

// Aby odpowiedzi były spójne daje przykładowy res:

//   res.json({
//       status: 200,
//       statusText: "OK",
//       data: {
//         ...
//       },
//     });

const get = async (req, res, next) => {
  try {
    const transactions = await service.getTransactions();
    return res.json({
      messege:
        'this is dev data if you see this messege the server you are connecting is wrong pls check your url adress in axios/fetch',
      status: 200,
      statusText: 'OK',
      data: transactions,
    });
  } catch (err) {
    return res
      .status(500)
      .json({ status: 500, statusText: 'Internal serwer error', error: err });
  }
};

module.exports = {
  get,
};
//   getById,
//   getCategory,
//   create,
//   remove,
//   update,
// };
