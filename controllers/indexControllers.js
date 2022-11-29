const userModel = require("../models/users");
const productModel = require("../models/products");

exports.homePage = (req, res, next) => {
  const user = req.user;
  res.render("homepage");
};

exports.adminPage = async (req, res, next) => {
  res.render("adminPage");
};

exports.addProducts = async (req, res, next) => {
  console.log(req.file);
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

    // res.status(200).json({message:"done"})
    res.redirect(req.headers.referer);
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

exports.addProductPage = async (req, res, next) => {
  res.render("addProduct");
};
exports.allProducts = async (req, res, next) => {
  const allProducts = await productModel.find();
  res.render("allProducts", { products: allProducts });
};
exports.allUsers = async(req,res,next) =>{
  let allUsers = await userModel.find();
  res.render("allUsers" , {users:allUsers})
}
exports.deleteProduct = async (req, res, next) => {
  console.log(req.params.id);
  let prdctDeleted = await productModel.findByIdAndRemove(req.params.id)
  console.log(prdctDeleted);
  res.redirect("back");
};
exports.updateProduct = async (req, res, next) => {
  console.log(req.file);
  const updateThisProduct = await productModel.findByIdAndUpdate(
    req.params.id,
    {
      productname: req.body.updatename,
      productprice: req.body.updateprice,
      productquantity: req.body.updatequantity,
      productImage: req.file.path,
    }
  );
  res.redirect("back");
};
