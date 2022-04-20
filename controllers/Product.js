import { getProducts, getProductsByID, createProduct, editProduct, deleteProductById } from "../models/productModel.js";

export const showProducts = (req, res) => {
    getProducts((err, result) => {
        if (err) {
            res.json(err)
        } else {
            res.json(result)
        }
    })
}

export const showProductsById = (req, res) => {
    getProductsByID(req.params.id, (err, result) => {
        if (err) {
            res.json(err)
        } else {
            res.json(result)
        }
    })
}

export const insetProduct = (req, res) => {
    const data = req.body;
    createProduct(data, (err, result) => {
        if (err) {
            res.json(err)
        } else {
            res.json(result)
        }
    })
}

export const updateProduct = (req, res) => {
    const data = req.body;
    const id = req.params.id;
    editProduct(data, id, (err, result) => {
        if (err) {
            res.json(err)
        } else {
            res.json(result)
        }
    })
}

export const deleteProduct = (req, res) => {
    const id = req.params.id;
    deleteProductById(id, (err, result) => {
        if (err) {
            res.json(err)
        } else {
            res.json(result)
        }
    })
}