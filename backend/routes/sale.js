const express = require('express');
const { createSale, getSales, getSaleById, updateSale } = require('../controllers/sale');
const router = express.Router();

router.post('/', createSale);
router.get('/', getSales);
router.get('/:id', getSaleById);
router.put('/:id', updateSale);

module.exports = router;