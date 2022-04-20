import express from 'express';

import { showProducts, showProductsById, insetProduct, updateProduct, deleteProduct } from '../controllers/Product.js';

const router = express.Router();

// product
router.get('/products', showProducts);
router.get('/products/:id', showProductsById);
router.post('/products', insetProduct);
router.put('/products/:id', updateProduct);
router.delete('/products/:id', deleteProduct);

export default router;