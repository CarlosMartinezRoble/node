const dotenv = require ('dotenv');
dotenv.config();
const mongoose =require ('mongoose');
const mongo_DB = process.env.MONGO_DB;

const connect = async()=>{
    try {
        const db = await mongoose.connect(mongo_DB, {
            useNewUrlParser:true,
            useUnifiedTopology: true,
        });
        const {name,host}= db.connection;
        console.log(`conectado con la base de datos:${name}, en el host:${host}`);
    } catch (error) {
        console.log('error conectando con la base de datos',error);
    }
}
module.exports={connect};
