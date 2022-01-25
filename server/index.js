//express
const express = require("express");
//morgan
const logger=require("morgan");
//basededatos
const{connect}= require("./app/config/database");
//routes .
const home=require("./app/api/routes/home.routes");
const user=require("./app/api/routes/user.routes");
const character=require("./app/api/routes/character.routes");
const location=require("./app/api/routes/location.routes");
//error
const HTTPSTATUSCODE= require ("./app/utils/httpStatusCode");   
//cors
const cors=require("cors");
//bcrypt
const { use } = require("bcrypt/promises");
// const res = require("express/lib/response");
const PORT=3000;
const app= express();
const { json } = require("express/lib/response");

// connect();
//headers
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


// app.use("/", home);
// app.use("/user", user);
// app.use("/character", character);
// app.use("/location", location);

//control de errores
app.use((req,res,next)=>{
    let err= new Error;
    err.status = 404;
    err.message= HTTPSTATUSCODE[404];
    next(err);
});
app.use((err, req,res,next)=>{
    return res.status(err.status||500),json(err.message||"unexpected error");
});

// ocultar node.js
app.disable("x-powered-by")

app.listen(PORT, () => {
    console.log(`Server running in http://localhost:${PORT}`);
});



//video 28:07 del segundo video de antonio