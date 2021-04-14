const mongoose = require('mongoose');


const DataSchema = new mongoose.Schema({
  nome: String // String is shorthand for {type: String}
});

const cidade = mongoose.model("Cidade", DataSchema);

module.exports = cidade;