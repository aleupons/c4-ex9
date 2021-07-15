const express = require("express");
const debug = require("debug")("api-tipos:servidor:rutes:tipo:tipo");
const {
  mostrarTipo,
  modificarTipo,
  esborrarTipo,
} = require("../../../bd/controladors/tipos");

const router = express.Router();

router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const tipo = await mostrarTipo(id);
    res.json(tipo);
  } catch (error) {
    res.next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  const { id } = req.params;
  const tipo = req.body;
  try {
    const tipo = await modificarTipo(id, tipo);
    res.json(tipo);
  } catch (error) {
    res.next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const tipo = await esborrarTipo(id);
    res.json(tipo);
  } catch (error) {
    res.next(error);
  }
});

module.exports = router;
