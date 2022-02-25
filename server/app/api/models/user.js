const mongoose=require("mongoose");
const Schema= mongoose.Schema;
const bcrypt= require("bcrypt")
const SaltRounds=10;
const UserSchema= new Schema({
    username:{type:String, trim:true,required:true},
    emoji:{type: String, required:true},
    email: {type: String, required:true},
    password:{type: String, required:true},
    favCharacters: [{type:Schema.Types.ObjectId, ref:"characters"}], 
});
UserSchema.pre("save", function(next){
    this.password=bcrypt.hashSync(this.password,SaltRounds)
    next();

});
const User=mongoose.model("users", UserSchema);
module.exports= User;