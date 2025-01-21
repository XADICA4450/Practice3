const mongoose = require("mongoose");

const { Schema } = mongoose;

const ShopSchema = new Schema({
  title: { type: String, require: true },
  price: { type: Number, require: true },
  imageUrl: { type: String, require: true },
  description:{type:String, require:true}
});

const ShopModel = mongoose.model("Shop", ShopSchema);

module.exports = ShopModel;
