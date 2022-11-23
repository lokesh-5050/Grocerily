const userModel = require("../models/users");
const productModel = require('../models/products')

exports.homePage = (req, res, next) => {
  const user = req.user;
  res.render("homepage", {});
};

exports.adminPage = async (req, res, next) => {
  const allProducts = await productModel.find();
  res.render("adminPage", { products: allProducts });
};

exports.addProducts = async (req, res, next) => {
  //file is image's name with cloudinary so //req.file.path
  const { productname, productprice, productquantity } = req.body;
  try {
    const newProduct = await productModel.create({
      productname: productname,
      productprice: productprice,
      productquantity: productquantity,
      productImage: req.file.path,
    });
    console.log("here");

    res.status(200).json({message:"done"})
    // res.redirect(req.headers.referer);
  } catch (error) {
    res.status(403).json(error);
  }
};
