require("dotenv").config();
const express = require("express");
const debug = require("debug")("api-tipos:servidor:init");
const chalk = require("chalk");
const { errorServidor } = require("./errors");

const app = express();

const port = process.env.PORT || process.env.SERVER_PORT || 4000;

const server = app.listen(port, () => {
  debug(chalk.yellow(`\nServidor actiu al port ${port}`));
});

server.on("error", (err) => errorServidor(err, port));

module.exports = app;
