const express = require("express");
const debug = require("debug")("api-tipos:servidor:rutes:tipos");
const rutaTipo = require("./tipo/tipo");

const router = express.Router();

router.use("/tipo", rutaTipo);
router.get("/listado", async (req, res, next) => {
  res.json("Llista");
});
router.post("/nuevo-tipo", async (req, res, next) => {
  res.json("Afegir");
});

module.exports = router;
