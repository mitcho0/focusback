const mongoose = require('mongoose');


const DataSchema = new mongoose.Schema({
  nome: String,
  localizacao: String,
  cidade: String,
  categoria: [{ type: mongoose.ObjectId, ref: "Categoria" }],
  produto: [{ type: mongoose.ObjectId, ref: "Produtos" }],
  compra_minima: Number,
  descricao: String,
  imagem_url: String
},{
  timestamps:true
})
const restourante = mongoose.model("Restourante", DataSchema);
module.exports = restourante;