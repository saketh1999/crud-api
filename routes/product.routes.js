import express from 'express'
import { getAllProducts, getProductById, postProduct, deleteProductById, updateProductById } from '../Controller/product.controller.js';


export const router = express.Router();

//Post a Product
router.post('/',postProduct);

//Get All Product
router.get('/',getAllProducts);

//Get Product by Id
router.get('/:id',getProductById)

//Update Product By Id
router.patch('/:id',updateProductById)

//Delete a Product
router.delete('/:id',deleteProductById)
