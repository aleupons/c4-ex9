const { body } = require("express-validator");
const express = require("express");
const debug = require("debug")("api-tipos:servidor:rutes:tipos");
const rutaTipo = require("./tipo/tipo");
const { crearTipo, llistarTipos } = require("../../bd/controladors/tipos");
const { validationErrors } = require("../errors");

const router = express.Router();

router.use("/tipo", rutaTipo);

router.get("/listado", async (req, res, next) => {
  try {
    const llista = await llistarTipos();
    res.json(llista);
  } catch (error) {
    next(error);
  }
});

router.post(
  "/nuevo-tipo",
  body("tipo").isAlpha(),
  validationErrors,
  async (req, res, next) => {
    const tipo = req.body;
    try {
      const nouTipo = await crearTipo(tipo);
      res.status(201).json(nouTipo);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
