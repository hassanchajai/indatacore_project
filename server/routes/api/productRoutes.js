const express = require("express")
const router = express.Router()
const product = require("../../controllers/Product.controllers")

router.get("/", product.get_all)
router.get("/:id", product.get_one)
router.post("/", product.add)
router.put("/:id", product.update)
router.delete("/:id", product.delete)

module.exports = router