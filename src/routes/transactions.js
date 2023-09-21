const express = require("express");
const transactionsController = require("../controllers/transactions");

const router = express.Router();

router.get("/", transactionsController.get);

// router.get("/:id", auth, transactionsController.getById);

// router.get("/categories/:id", auth, transactionsController.getCategory);

// router.post("/", auth, transactionsController.create);

// router.delete("/:id", auth, transactionsController.remove);

// router.put("/:id", auth, transactionsController.update);

module.exports = router;
