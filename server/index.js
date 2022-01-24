 const express = require("express");

// const{connect}= require("./app/config/database");

// connect();

const app= express();
const PORT=3000;

app.listen(PORT, () => {
    console.log(`Server running in http://localhost:${PORT}`);
  });
