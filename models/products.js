const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  productname: {
    type: String,
    required: [true, "Please enter product name"],
    unique: true,
  },
  productprice: {
    type: Number,
    required: [true, "Please enter product price"],
  },
  productquantity: {
    type: Number,
    default: 1,
    required: [true, "Please enter product quantity"],
  },
  productImage: { type: String, required: [true] },
  category: [],
});

module.exports = mongoose.model("product", productSchema);
