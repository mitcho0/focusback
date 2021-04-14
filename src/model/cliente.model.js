const mongoose = require('mongoose');


const DataSchema = new mongoose.Schema({
  nome: String, 
  morada: String,
  numero: Number
},{
  timestamps:true
})
const cliente = mongoose.model("Cliente", DataSchema);

module.exports = cliente;