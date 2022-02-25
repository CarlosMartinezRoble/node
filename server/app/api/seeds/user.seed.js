const mongoose=require("mongoose");
const dotenv=require("dotenv");
dotenv.config();

const User= require("../models/user");
const users=[{
    "username":"pinguino1",
    "emoji":"🐧",
    "email":"pinguino1@gmail.com",
    "password":"pinguino1"
    },
    {
        "username":"pinguino2",
        "emoji":"🐧",
        "email":"pinguino2@gmail.com",
        "password":"pinguino2"
    }
];
mongoose.connect(process.env.MONGO_DB,{
    useNewUrlParser:true,
    useUnifiedTopology: true,  
}).then(async()=>{
    const allUsers= await User.find();
    if (allUsers.length){
        await User.collection.drop();
        console.log("dataBase droped");
    }
})
.catch((err)=>console.log("error droping DataBase", err))
.then(async()=>{
    await User.insertMany(users);
    console.log("users inserts in dataBase");  
}).catch((err)=>console.log("error droping DataBase", err))