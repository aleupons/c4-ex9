const { validationResult } = require("express-validator");
const debug = require("debug")("api-tipos:servidor:errors");
const chalk = require("chalk");

const validationErrors = (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    const nouError = generarError(error.mapped().id.msg, 400);
    return next(nouError);
  }
};

const errorServidor = (err, port) => {
  debug(chalk.red("No s'ha pogut aixecar el servidor"));
  if (err.code === "EADDRINUSE") {
    debug(chalk.red(`El port ${chalk.red.bold(port)} està ocupat`));
  }
};

const error404 = (req, res, next) => {
  res.status(404).json({ error: true, mensaje: "La ruta no existeix" });
};

const errorGeneral = (err, req, res, next) => {
  const codi = err.codi || 500;
  const missatge = err.codi ? err.message : "Error general";
  res.status(codi).json({ error: true, missatge });
};

const generarError = (missatge, codi) => {
  const nouError = new Error(missatge);
  nouError.codi = codi;
  return nouError;
};

module.exports = {
  validationErrors,
  errorServidor,
  error404,
  errorGeneral,
  generarError,
};
