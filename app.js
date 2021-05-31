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

const port = 3000;

app.listen(port, () => {
  console.log("Servidor ejecutandose desde puerto", port);
});

// 6. MOTOR DE PLANTILLAS EJS
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

// 5.2 MIDDLEWARE: Se ejecuta una función, antes de realizar solicitudes
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  //res.send("Respuesta desde EXPRESS v2");
  res.render("index", { title: "Titulo para página renderizada ejs" });
});

// para dirigirse a una página en concreto
app.get("/servicios", (req, res) => {
  //res.send("Se está en la página de servicios");
  res.render("servicios", {
    titleServices: "Titulo para página servicios ejs",
  });
});

app.use((req, res, next) => {
  //res.status(404).sendfile(__dirname + "/public/404.html");
  res.status(404).render("404", {
    titulo404: "Titulo de servicios ejs",
    descripcion: "Descripción para 404",
  });
});
