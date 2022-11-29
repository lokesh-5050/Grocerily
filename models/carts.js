const mongoose = require("mongoose");

const cartSchema = mongoose.Schema(
  {
    products: [
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"product"
        }
    ],
    quan:{type:Number , default:1}
  },
  { timestamps: true }
);

module.exports = mongoose.model("cart", cartSchema);
