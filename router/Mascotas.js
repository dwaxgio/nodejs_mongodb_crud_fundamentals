const express = require("express");
const router = express.Router();

//Acceso a modelo de mascota
const Mascota = require("../models/mascota");

router.get("/", async (req, res) => {
  try {
    const arrayMascotasDB = await Mascota.find();
    console.log(arrayMascotasDB);

    res.render("mascotas", {
      arrayMascotas: arrayMascotasDB,
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

router.get("/crear", (req, res) => {
  res.render("crear");
});

// Capturar información desde body
router.post("/", async (req, res) => {
  const body = req.body;
  try {
    // MONGOOSE para guardar información
    // const mascotaDB = new Mascota(body)
    // await mascotaDB.save()

    await Mascota.create(body);

    res.redirect("/mascotas");
  } catch (error) {
    console.log(error);
  }
});

// Ruta para leer solo un documento, con variable id dinámica
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const registroABuscar = await Mascota.findOne({ _id: id });
    console.log(registroABuscar);

    res.render("detalle", {
      mascota: registroABuscar,
      error: false,
    });
  } catch (error) {
    console.log(error);
    res.render("detalle", {
      error: true,
      mensaje: "No se encontró registro con el id indicado",
    });
  }
});

// Ruta para eliminar solo un documento, con variable id dinámica
router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const registroAEliminar = await Mascota.findByIdAndDelete({ _id: id });
    if (registroAEliminar) {
      // respuesta en json (complementar con fetch) cuando se elimina un registro
      res.json({
        estado: true,
        mensaje: "eliminado!",
      });
    } else {
      res.json({
        estado: false,
        mensaje: "no se pudo eliminar el registro",
      });
    }
  } catch (error) {
    console.log(error);
    res.render("detalle", {
      error: true,
      mensaje: "No se encontró registro con el id indicado",
    });
  }
});

// Ruta para editar solo un documento, con variable id dinámica
router.put("/:id", async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  try {
    const documentoAEditar = await Mascota.findByIdAndUpdate(id, body, {
      useFindAndModify: false,
    });
    console.log(documentoAEditar);

    res.json({
      estado: true,
      mensaje: "Editado",
    });
  } catch (error) {
    console.log(error);
    res.json({
      estado: false,
      mensaje: "No se pudo editar registro",
    });
  }
});

module.exports = router;
