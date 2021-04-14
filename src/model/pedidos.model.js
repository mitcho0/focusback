const mongoose = require('mongoose');


const DataSchema = new mongoose.Schema({
  cliente: { type: mongoose.ObjectId, ref: "Cliente" }, // String is shorthand for {type: String}
  produtos: [{ type: mongoose.ObjectId, ref: "Produtos" }],
  totalCompra: Number
},{
  timestamps:true
})
const pedido = mongoose.model("Pedido", DataSchema);
module.exports= pedido;
