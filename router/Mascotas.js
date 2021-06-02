const express = require("express");
const router = express.Router();

//Acceso a modelo de mascota
const Mascota = require("../models/mascota");

router.get("/", async (req, res) => {
  try {
    const arrayMascotasDB = await Mascota.find();
    console.log(arrayMascotasDB);

    res.render("mascotas", {
        arrayMascotas: arrayMascotasDB
    //   arrayMascotas: [
    //     { id: 1, nombre: "Dante", descripcion: "Pastor alemán" },
    //     { id: 2, nombre: "Laika", descripcion: "Criolla" },
    // PRUEBA
    //   ],
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
