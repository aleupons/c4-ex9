const express = require("express");
const debug = require("debug")("api-tipos:servidor:rutes:tipo:tipo");

const router = express.Router();

router.get("/:id", async (req, res, next) => {
  res.json("Get tipo");
});
router.put("/:id", async (req, res, next) => {
  res.json("Modificar");
});
router.delete("/:id", async (req, res, next) => {
  res.json("Esborrar");
});

module.exports = router;
