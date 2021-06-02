// FUENTE TUTORIAL: https://bluuweb.github.io/node/

// // 2.2 Se llama a módulo exportado
// //const juegosExportados = require("./juegos.js");
// // 2.5 Para llamar a los miembros del objeto exportado:
// const { juegos, consolas } = require("./juegos.js");

// // 1. Se implemente en app.js o index.js los metodos principales
// // juegosExportados.forEach((item) => {
// //   console.log(item);
// // });

// juegos.forEach((item) => {
//   console.log(item);
// });

// consolas.forEach((item) => {
//   console.log(item);
// });

// // 3. NPM, instalación y uso de módulos
// var cowsay = require("cowsay");

// console.log(
//   cowsay.say({
//     text: "Prueba cowsay",
//     e: "-O",
//     T: "U ",
//   })
// );

// // 4. SERVIDOR HTTP
// const http = require("http");

// // Se visualiza por localhost:puerto
// const server = http.createServer((req, res) => {
//   res.end("Respondiendo a la solicitud");
// });

// const puerto = 3000;

// // Se visualiza en terminal
// server.listen(puerto, () => {
//   console.log("escuchando solicitudes: " + puerto);
// });

// 5. EXPRESS para simplificar configuración de servidor HTTP
const express = require("express");
const app = express();

// MÓDULO PARA LEER INFORMACION DESDE FORMULARIO
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
// MÓDULO PARA LEER INFORMACION DESDE FORMULARIO/

// dotenv PAQUETE PARA CREAR VARIABLES DE ENTORNO (PROTEGIDAS)
require('dotenv').config();
// dotenv PAQUETE PARA CREAR VARIABLES DE ENTORNO (PROTEGIDAS)/

const port = process.env.PORT || 3000;

// MONGOOSE: Modelado para node.js, que incluye conexiones a mongodb
// Conexión a db
const mongoose = require('mongoose');


const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.1x5j9.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`; // Conexión de MongoDb

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log('Base de datos conectada'))
  .catch(e => console.log(e));
// MONGOOSE: Modelado para node.js, que incluye conexiones a mongodb /

app.listen(port, () => {
  console.log("Servidor ejecutandose desde puerto", port);
});

// 6. MOTOR DE PLANTILLAS EJS
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

// 5.2 MIDDLEWARE: Se ejecuta una función, antes de realizar solicitudes
// MIDDLEWARE: Cuando se implementa USE
app.use(express.static(__dirname + "/public"));

// Rutas web
app.use('/', require('./router/RutasWeb'));

app.use('/mascotas', require('./router/Mascotas'));

app.use((req, res, next) => {
  //res.status(404).sendfile(__dirname + "/public/404.html");
  res.status(404).render("404", {
    titulo404: "Titulo de servicios ejs",
    descripcion: "Descripción para 404",
  });
});
