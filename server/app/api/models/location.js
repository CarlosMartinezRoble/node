const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const LocationSchema= new Schema({
    name: {type: String, required:true},
    type:{type: String, required:false},
},{
  timestamps:true
});
const Location=mongoose.model("locations", LocationSchema);
module.exports= Location;