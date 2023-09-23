const express = require('express');
const mockTransactionsController = require('../controllers/mockTransactions');

const router = express.Router();

router.get('/', mockTransactionsController.get);

router.get('/:id', mockTransactionsController.getById);

router.get('/categories/:id', mockTransactionsController.getCategory);

router.post('/', mockTransactionsController.create);

router.delete('/:id', mockTransactionsController.remove);

router.put('/:id', mockTransactionsController.update);

module.exports = router;
