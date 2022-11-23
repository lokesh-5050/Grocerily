const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/Grocerily");
const plm = require("passport-local-mongoose");
const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please enter your username"],
    trim: true,
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Please enter your email"],
    trim: true,
    unique: true,
  },
  phoneNo: {
    type: Number,
    required: [true, "Please enter your phoneNo"],
    trim: true,
    unique: true,
  },
  Cart: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "cart",
    },
  ],
  order: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "order",
    },
  ],
  whishlist: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "wishlist",
    },
  ],
  role: { type: String, enum: ["user", "admin"], default: "user" },
});

userSchema.plugin(plm, { usernameField: "email" });

module.exports = mongoose.model("user", userSchema);
