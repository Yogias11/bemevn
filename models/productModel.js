import db from "../config/database.js";

//Get All
export const getProducts = (result) => {
    db.query("SELECT * FROM product", (err, res) => {
        if (err) {
            console.log(err);
            result(err, null)
        } else {
            result(null, res)
        }
    })
}

// Get By ID
export const getProductsByID = (id, result) => {
    db.query("SELECT * FROM product WHERE product_id = ?", [id], (err, res) => {
        if (err) {
            console.log(err);
            result(err, null)
        } else {
            result(null, res[0])
        }
    })
}

// Insert
export const createProduct = (data, result) => {
    db.query("INSERT INTO product SET ?", [data], (err, res) => {
        if (err) {
            console.log(err);
            result(err, null)
        } else {
            result(null, res)
        }
    })
}

// Update
export const editProduct = (data, id, result) => {
    db.query("UPDATE product SET product_name = ?, product_price = ? WHERE product_id = ?", [data.product_name, data.product_price, id], (err, res) => {
        if (err) {
            console.log(err);
            result(err, null)
        } else {
            result(null, res)
        }
    })
}

// Delete
export const deleteProductById = (id, result) => {
    db.query("DELETE FROM product WHERE product_id = ?", [id], (err, res) => {
        if (err) {
            console.log(err);
            result(err, null)
        } else {
            result(null, res)
        }
    })
}