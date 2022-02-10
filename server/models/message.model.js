const mongoose = require("mongoose");

const messagesSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  createdAt: { type: String },
  message:{ type:String, required:true},
  dp:{ type:String, required:true,}
},{timestamps:true});

// TODO: prod v1: add VIT-Registration Number also to the Schema as well

module.exports = Messages = mongoose.model("messages", messagesSchema);