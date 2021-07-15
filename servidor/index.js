require("dotenv").config();
const express = require("express");
const debug = require("debug")("api-tipos:servidor:principal");
const morgan = require("morgan");
const cors = require("cors");
const app = require("./init");
const rutaTipos = require("./rutes/tipos");
const { error404, errorGeneral } = require("./errors");

const iniciaServidor = () => {
  app.use(morgan("dev"));
  app.use(cors());
  app.use(express.json());

  app.use("/tipos", rutaTipos);

  app.use(error404);
  app.use(errorGeneral);
};

module.exports = iniciaServidor;
