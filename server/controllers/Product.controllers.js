
const Product = require("../models/Product.model");

// get all Products
exports.get_all = function (req, res) {
  Product.find({active:true})
    .then((Products) => {
      // Check if Products exists
      if (!Products || Products.length === 0) {
        return res.status(404).send({
          status: false,
          message: "no Product found",
        });
      } else {
        return res.status(200).send({
          status: true,
          Products: Products,
        });
      }
    }) 
    .catch(() =>
      res.status(500).send({
        status: false,
        message: "Error while searching for Products",
      })
    );
};

// // get one Product
exports.get_one = function (req, res) {


  // Find account with matching id
  Product.findById(req.params.id)
    .then((Product) => {
      if (!Product) {
        res.status(400).send({
          status: false,
          message: "Product doesn't exist",
        });
      } else {
        return res.status(200).send({
          status: true,
          Product: Product,
        });
      }
    })
    .catch(() =>
      res.status(500).send({
        status: false,
        message: "Error while searching for Product",
      })
    );
};

// add a Product
exports.add = async function (req, res) {
  let newProduct = new Product(req.body);
  newProduct
    .save()
    .then((Product) => {
      return res.status(200).send({
        status: true,
        message: "Product added successfully",
        Product,
      });
    })
    .catch((err) => {
      return res.status(400).send({
        status: false,
        message: err,
      });
    });
};

// update a Product
exports.update =async function (req, res) {

//   get the old proudct with id 
  const oldProduct = await Product.findById(req.params.id);
  if (!oldProduct) {
    return res.status(404).send({
      status: false,
      message: "cannot find the Product with id " + req.params.id,
    });
  }
    oldProduct.update( req.body, async (err, docs) => {
    if (err) {
      return res.status(200).send({
        status: false,
        message: err,
      });
    }

    return res.status(200).send({
      status: true,
      message: "Product updated succefully!",
    });
  });
};

// // delete a Product: change status to deleted
exports.delete = function (req, res) {

  // Find Product by id
  Product.findById(req.params.id)
    .then((Product) => {
      if (!Product) {
        res.status(400).send({
          status: false,
          message: "Product doesn't exist",
        });
      } else {
        Product.status = "inactive";
        Product
          .save()
          .then(() =>
            res.status(200).send({
              status: true,
              message: "Product successfuly deleted",
            })
          )
          .catch(() =>
            res.status(500).send({
              status: false,
              message: "error while saving changes to db",
            })
          );
      }
    })
    .catch(() =>
      res.status(500).send({
        status: false,
        message: "Error while searshing for Product",
      })
    );
};


  