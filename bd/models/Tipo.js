const { Schema, model } = require("mongoose");

const TipoSchema = new Schema(
  {
    tipo: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { versionKey: false }
);

const Tipo = model("Item", TipoSchema, "tipos");

module.exports = Tipo;
