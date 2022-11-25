const config = process.env;
var express = require("express");
var router = express.Router();
const {
  homePage,
  adminPage,
  addProducts,
  addProductPage,
  allProducts,
  allUsers,
  deleteProduct,
  updateProduct
} = require("../controllers/indexControllers");

const { createUser } = require("../controllers/userControllers");
const localStrategy = require("passport-local");
const userModel = require("../models/users");
const passport = require("passport");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");
passport.use(
  new localStrategy({ usernameField: "email" }, userModel.authenticate())
);

//cloudinary config
cloudinary.config({
  cloud_name: config.cloudinary_cloud_name,
  api_key: config.cloudinary_api_key,
  api_secret: config.cloudinary_api_secret,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "DEV",
  },
});

const upload = multer({ storage: storage });

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

//Api for userCreation
router.post("/createUser", createUser);

//admin page
router.get("/admino", adminPage);

//Api for add-products
router.post("/addProduct", upload.single("myFile"), addProducts);

//Api for addProductPage
router.get("/addProductPage" ,addProductPage )

//Api for /allProducts
router.get("/allProducts" , allProducts )

//Api for /allUsers
router.get("/allUsers" , allUsers )

//Api for //deleteProduct
router.get("/deleteProduct/:id" , deleteProduct )

//Api for //updateProduct
router.post("/updateProduct/:id" , upload.single("myFile"),  updateProduct )

// //Api for userLogin
// router.post("/userLogin", authenticateLogin  ,login)

// //Api for a homepage
// router.get("/homepage" , homePage)

module.exports = router;
