const { check, body } = require("express-validator");
const express = require("express");
const debug = require("debug")("api-tipos:servidor:rutes:tipo:tipo");
const {
  mostrarTipo,
  modificarTipo,
  esborrarTipo,
} = require("../../../bd/controladors/tipos");
const { validationErrors } = require("../../errors");

const router = express.Router();

router.get(
  "/:id",
  check("id", "Id incorrecta").isMongoId(),
  validationErrors,
  async (req, res, next) => {
    const { id } = req.params;
    try {
      const tipo = await mostrarTipo(id);
      res.json(tipo);
    } catch (error) {
      next(error);
    }
  }
);

router.put(
  "/:id",
  check("id", "Id incorrecta").isMongoId(),
  body("tipo").isAlpha(),
  validationErrors,
  async (req, res, next) => {
    const { id } = req.params;
    const tipo = req.body;
    try {
      const tipoModificat = await modificarTipo(id, tipo);
      res.json(tipoModificat);
    } catch (error) {
      next(error);
    }
  }
);

router.delete(
  "/:id",
  check("id", "Id incorrecta").isMongoId(),
  validationErrors,
  async (req, res, next) => {
    const { id } = req.params;
    try {
      const tipo = await esborrarTipo(id);
      res.json(tipo);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
