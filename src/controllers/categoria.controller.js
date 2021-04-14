const Categoria = require("../model/categoria.model");
const  Produtos = require("../model/produtos.model")
/* rotas.get("/", Categoria.listar);
rotas.get("/", Categoria.detalhe);
rotas.pos("/", Categoria.inserir);
rotas.delete("/", Categoria.apagar);
rotas.put("/", Categoria.actualizar);*/

module.exports = {
  async listar(req, res) {
    const user = await Categoria.find();
        res.json(user);
  },
 
  async detalhe(req, res) {
    const {_id}=req.params;
        const user = await Categoria.findOne({_id})
        res.json(user);
    
  },

  async inserir(req, res) {
    
    
    const {nome,imagem_url,produtos}=req.body;
    const produtos = await Produtos.find({_id})
    let data={};
    
    let user = await Categoria.findOne({nome});
    if(!user){
        data = {nome,imagem_url };
        user = await Categoria.create(data);
        return res.status(200).json(user)
    }else{
        return res.status(500).json(user)
    }
  },
  
  
  

    async mostrarUsuario(req,res){
        const {_id}=req.params;
        const user = await Categoria.findOne({_id})
        res.json(user);
  },

  async apagar(req, res) {
    const {_id}=req.params
        const user = await Categoria.fondByIdAndDelete({_id})
  },

  async actualizar(req, res) {
   const {_id,nome,imagem_url,produtos} = req.body;
        const data = {nome,imagem_url,produtos};
        const user = await Categoria.findOneAndUpadate({_id},data,{new:true});
        res.json(user);
  },

  async listarProdutos(req,res){
    const{_id}=req.params
    const user = await Categoria.findOne({_id}).populate(["Produto"])
    res.json(user);
  }
};
