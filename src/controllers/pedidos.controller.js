const Pedidos = require("../model/pedidos.model");

/* rotas.get("/", Pedido.listar);
rotas.get("/", Pedido.detalhe);
rotas.pos("/", Pedido.inserir);
rotas.delete("/", Pedido.apagar);
rotas.put("/", Pedido.actualizar)*/

module.exports = {
  async listar(req, res) {
    const user = await Pedidos.find();
    res.json(user);
  },
  async detalhe(req, res) {
    const {_id}=req.params;
        const user = await Pedidos.findOne({_id})
        res.json(user);
  },

  async inserir(req, res) {
    const {cliente,produtos,totalCompra}=req.body;
        let data={};
        
        let user = await Pedidos.findOne({cliente});
        if(!user){
            data = {cliente,produtos,totalCompra};
            user = await Pedidos.create(data);
            return res.status(200).json(user)
        }else{
            return res.status(500).json(user)
        }
  },

  async apagar(req, res) {
    const {_id}=req.params
        const user = await Pedidos.fondByIdAndDelete({_id})
  },

  async actualizar(req, res) {
    const {_id,cliente,produtos,totalCompra} = req.body;
        const data = {cliente,produtos,totalCompra};
        const user = await Pedidos.findOneAndUpadate({_id},data,{new:true});
        res.json(user);
    
  }
};
