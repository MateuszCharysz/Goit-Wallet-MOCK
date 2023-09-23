const { Schema, model } = require('mongoose');

const mockTransaction = new Schema(
  {
    type: {
      type: String,
      enum: ['-', '+'],
      required: true,
    },
    category: {
      type: String,
      enum: [
        'Main expenses',
        'Products',
        'Car',
        'Self care',
        'Child care',
        'Household products',
        'Education',
        'Leisure',
        'Other expenses',
        'Entertainment',
      ],
    },
    date: {
      type: date,
      _id: false,
      required: true,
    },
    comment: {
      type: String,
      required: true,
      trim: true,
    },
    sum: {
      type: String,
      required: true,
      trim: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },
  },
  { versionKey: false, timestamps: true },
);

const Transaction = model(
  'mockTransaction',
  mockTransaction,
  'mockTransactions',
);

module.exports = Transaction;
