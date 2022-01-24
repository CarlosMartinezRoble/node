 const { use } = require("bcrypt/promises");
const express = require("express");
const res = require("express/lib/response");
const cors=require("cors");
const logger=require("morgan")
// const{connect}= require("./app/config/database");

// connect();
const PORT=3000;
const app= express();

app.use((req,res,next)=>{
    res.header('Access-Control-Alow-Methods','GET,PUT,POST,DELETE');
    res.header('Access-Control-Alow-Credentials',true);
    res.header('Access-Control-Alow-Header',"Content-Type");
    next();
})
 
app.use(cors({
    origin:[`http://localhost:3000`,`http://localhost:4000`],
    credentials:true, 
    })
);
app.use(express.json());  
app.use(express.urlencoded({extended: true}));

app.use(logger("dev"));


app.listen(PORT, () => {
    console.log(`Server running in http://localhost:${PORT}`);
});



//video 21:11 del segundo video de antonio