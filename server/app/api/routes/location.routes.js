const express = require("express");
//Guardamos la función de express.Router() en una variable llamada router
const router = express.Router();
//Importo isAuth
const { isAuth } = require("../../middlewares/auth.middleware");
//Aquí importaremos las funciones de los controladores
const {
  getAllLocations,
  getLocationById,
}=require("../controllers/Location.controller");
//Aqui vamos a definir el metodo y la funcion del controlador con su ruta
router.get("/", [isAuth], getAllCharacters);
router.get("/:locationId", getLocationById);
module.exports = router;
