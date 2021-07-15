const express = require("express");
const debug = require("debug")("api-tipos:servidor:rutes:tipos");
const rutaTipo = require("./tipo/tipo");
const { crearTipo, llistarTipos } = require("../../bd/controladors/tipos");

const router = express.Router();

router.use("/tipo", rutaTipo);

router.get("/listado", async (req, res, next) => {
  try {
    const llista = await llistarTipos();
    res.json(llista);
  } catch (error) {
    res.next(error);
  }
});

router.post("/nuevo-tipo", async (req, res, next) => {
  const nouTipo = req.body;
  try {
    const nouTipo = await crearTipo();
    res.status(201).json(nouTipo);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
