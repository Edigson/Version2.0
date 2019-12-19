const express = require("express");
const app = express();

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Definir rutas
app.use(require("./routes/index"));
app.listen(3000);

console.log("Server corriendo en el puerto 3000");
