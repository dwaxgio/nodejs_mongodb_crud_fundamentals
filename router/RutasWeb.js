const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  //res.send("Respuesta desde EXPRESS v2");
  res.render("index", { title: "Titulo para página renderizada ejs" });
});

// para dirigirse a una página en concreto
router.get("/servicios", (req, res) => {
  //res.send("Se está en la página de servicios");
  res.render("servicios", {
    titleServices: "Titulo para página servicios ejs",
  });
});

module.exports = router;