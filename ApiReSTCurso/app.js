 
 const express = require ('express');

 const app = express(); 
 
 const bookRouter = express.Router();
 const port = process.env.PORT || 3000; 

 app.get ('/', ( req, res ) => {
   res.send ( ' Welcome to my Nodemon API!' )
 });
bookRouter.route('/books')
 .get (( req, res)=> {
    const response = { hello :'its my API' };
    res.jason(response);
 });

 app.use('/api', bookRouter);

app.listen(port, ()=>{
  console.log(    `Runing on port ${port}`);
});
