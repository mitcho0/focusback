const Cidade = require("../model/cidade.model");

/* rotas.get("/", Cidade.listar);
rotas.get("/", Cidade.detalhe);
rotas.pos("/", Cidade.inserir);
rotas.delete("/", Cidade.apagar);
rotas.put("/", Cidade.actualizar);*/

module.exports = {
  async listar(req, res) {
     const user = await Cidade.find();
      res.json(user);;
  },
  async detalhe(req, res) {
    const {_id}=req.params;
    const user = await Cidade.findOne({_id})
    res.json(user);
  },

  async inserir(req, res) {
    const {nome}=req.body;
        let data={};
        
        let user = await Cidade.findOne({nome});
        if(!user){
            data = {nome};
            user = await Cidade.create(data);
            return res.status(200).json(user)
        }else{
            return res.status(500).json(user)
        }
  },

  async apagar(req, res) {
    const {_id}=req.params
    const user = await Cidade.fondByIdAndDelete({_id})
  },

  async actualizar(req, res) {
    const {_id,nome} = req.body;
        const data = {nome};
        const user = await Cidade.findOneAndUpadate({_id},data,{new:true});
        res.json(user);
  }
};
