const mongoose = require('mongoose');


const DataSchema = new mongoose.Schema({
  nome: String, // String is shorthand for {type: String}
  imagem_url: String,
  produtos:[{type: mongoose.ObjectId, ref: "produto" }]
},{
  timestamps:true
});
const categoria = mongoose.model("Categoria", DataSchema);

module.exports = categoria;


