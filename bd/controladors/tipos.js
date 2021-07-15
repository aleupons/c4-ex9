const { generarError } = require("../../servidor/errors");
const Tipo = require("../models/Tipo");

const llistarTipos = async () => {
  try {
    const tipos = await Tipo.findOne();
    if (tipos.length === 0) {
      const nouError = generarError("No hi ha cap tipus a la llista", 404);
      throw nouError;
    }
    return tipos;
  } catch (error) {
    const nouError = error.codi
      ? error
      : generarError("No es poden llistar els tipus", 404);
    throw nouError;
  }
};

const mostrarTipo = async (idTipo) => {
  try {
    const tipo = await Tipo.findOne({ _id: idTipo });
    if (!tipo) {
      const nouError = generarError("Aquest tipus no existeix");
      throw nouError;
    }
    return tipo;
  } catch (error) {
    const nouError = error.codi
      ? error
      : generarError("No es pot obtenir aquest tipus", 404);
    throw nouError;
  }
};

const crearTipo = async (nouTipo) => {
  try {
    const tipo = await Tipo.create(nouTipo);
    return tipo;
  } catch (error) {
    const nouError = generarError("No s'ha pogut crear el tipus", 404);
    throw nouError;
  }
};

const modificarTipo = async (id, tipoModificat) => {
  try {
    const id = await Tipo.findOne({ _id: id });
    if (!id) {
      const nouError = generarError("Aquest tipus no existeix");
      throw nouError;
    }
    const tipo = await Tipo.findByIdAndUpdate(id, tipoModificat);
    return tipo;
  } catch (error) {
    const nouError = error.codi
      ? error
      : generarError("No s'ha pogut modificar el tipus");
    throw nouError;
  }
};

const esborrarTipo = async (idTipo) => {
  try {
    const tipo = await Tipo.find({ _id: idTipo });
    if (!tipo) {
      const nouError = generarError("Aquest tipus no existeix");
      throw nouError;
    }
    const tipoEliminat = await Tipo.findByIdAndDelete(idTipo);
    return tipoEliminat;
  } catch (error) {
    const nouError = error.codi
      ? error
      : generarError("No es pot eliminar aquest tipus", 404);
    throw nouError;
  }
};

module.exports = {
  llistarTipos,
  mostrarTipo,
  crearTipo,
  modificarTipo,
  esborrarTipo,
};
