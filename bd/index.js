require("dotenv").config();
const debug = require("debug")("api-tipos:bd:conexio");
const chalk = require("chalk");
const mongoose = require("mongoose");

const connectarBD = (callback) => {
  mongoose.connect(
    process.env.DB_URL,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    },
    (err) => {
      if (err) {
        debug(chalk.red("No s'ha pogut connectar amb la BBDD"));
        debug(chalk.red(err.message));
        return;
      }
      debug(chalk.yellow("Connectant a la BBDD"));
      callback();
    }
  );
};

module.exports = connectarBD;
