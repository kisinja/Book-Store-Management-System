const express = require('express');
const { createSale, getSales, getSaleById, updateSale } = require('../controllers/sale');
const router = express.Router();

const { protect } = require("../middleware/authMiddleware");

router.post('/', createSale);
router.get('/', protect, getSales);
router.get('/:id', getSaleById);
router.put('/:id', updateSale);

module.exports = router;