const express = require('express')
const router = express.Router()
const userRoutes = require('./userRoutes');
const products = require('./productRoutes');
const bodyParser = require('body-parser')
const multer = require('multer');
const AppError = require('../../utils/appError');

router.use(bodyParser.urlencoded({ extended: true }))

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/storage/')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now()+"."+file.originalname.split('.')[file.originalname.split('.').length-1])
    }
})

var upload = multer({ storage: storage })

router.get("/", (req, res) => {
    return res.json({
        message: "welcome in cj api !"
    })
});
router.post("/upload", upload.single("file"), (req, res, next) => {
    const file = req.file
    console.log(req.file)
    if (!file) {
        const error = new AppError(500, "fail", 'Please upload a file')
        error.httpStatusCode = 400
        return next(error)
    }
    return res.json({
        message:"file uploaded successfuly!"
    })
})

router.use("/users", userRoutes);
router.use("/products", products);


module.exports = router