const Restourante = require("../model/restourante.model");
const Categoria = require("../model/categoria.model");
/* rotas.get("/", Restourante.listar);
rotas.get("/", Restourante.detalhe);
rotas.pos("/", Restourante.inserir);
rotas.delete("/", Restourante.apagar);
rotas.put("/", Restourante.actualizar);*/

module.exports = {
  async listar(req, res) {
    const user = await Restourante.find();
    res.json(user);
  },
  async detalhe(req, res) {
    const {_id}=req.params;
        const user = await Restourante.findOne({_id})
        res.json(user);
  },

  async inserir(req, res) {
    const {nome,localizacao,cidade,categoria,produto,compra_minima,descricao,imagem_url}=req.body;
        let data={};
        
        let user = await Restourante.findOne({nome});
        if(!user){
            data = {nome,
              localizacao,
              categoria,
              cidade,
              produto,
              compra_minima,
              descricao,
              imagem_url};
            user = await Restourante.create(data);   
        
            return res.status(200).json(user)
        }else{
            return res.status(500).json(user)
        }
  },

  async apagar(req, res) {
    const {_id}=req.params
        const user = await Restourante.fondByIdAndDelete({_id})
  },

  async actualizar(req, res) {
    
    const {_id,nome,localizacao,cidade,categoria,produto,compra_minima,descricao,imagem_url} = req.body;
        const data = {nome,localizacao,cidade,categoria,produto,compra_minima,descricao,imagem_url};
        const user = await Restourante.findOneAndUpadate({_id},data,{new:true});
        res.json(user);
    
  }
};
