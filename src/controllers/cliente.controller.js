const Cliente = require("../model/cliente.model");

/* rotas.get("/", Cliente.listar);
rotas.get("/", Cliente.detalhe);
rotas.pos("/", Cliente.inserir);
rotas.delete("/", Cliente.apagar);
rotas.put("/", Cliente.actualizar);*/

module.exports = {
  async listar(req, res) {
    const user = await Cliente.find();
    res.json(user);
  },
  async detalhe(req, res) {
    const {_id}=req.params;
    const user = await Cliente.findOne({_id})
    res.json(user);
  },

 async inserir(req, res) {
    const {nome,numero,morada}=req.body;
        let data={};
        
        let user = await Cliente.findOne({nome});
        if(!user){
            data = {nome,numero,morada};
            user = await Usuario.create(data);
            return res.status(200).json(user)
        }else{
            return res.status(500).json(user)
        }
  },

  async apagar(req, res) {
    res.json({ message: "rota apagar cliente" });const {_id}=req.params
    const user = await Cliente.fondByIdAndDelete({_id})
  },

  async actualizar(req, res) {
    const {_id,nome,numero,morada} = req.body;
        const data = {nome,numero,morada};
        const user = await Cliente.findOneAndUpadate({_id},data,{new:true});
        res.json(user);
  }
};
