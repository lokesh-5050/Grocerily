const mongoose = require("mongoose");

const offerSchema = mongoose.Schema(
  {
    offerName: { type: String, required: true },
    offerdes: { type: String, required: true },
    backColor: { type: String, default: white },
  },
  { timestamps: true }
);

module.exports = mongoose.model("offer", offerSchema);
