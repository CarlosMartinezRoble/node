const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const HomeSchema= new Schema({
},{
  timestamps:true
});
const Home=mongoose.model("home", HomeSchema);
module.exports= Home;