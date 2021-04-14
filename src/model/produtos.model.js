const mongoose = require('mongoose');


const DataSchema = new mongoose.Schema({
  nome: String,
  preco: Number,
  categoria: { type: mongoose.ObjectId, ref: "Categoria" },
  dataValidade: Date,
  descricao: String,
  imagem_url:{type:Array,default:[]}
},{
  timestamps:true
})
const produto = mongoose.model("Produto", DataSchema);
module.exports = produto;