const Produtos = require("../model/produtos.model");
const Categoria = require("../controllers/categoria.controller")


module.exports = {
  async listar(req, res) {
    const user = await Produtos.find();
    res.json(user);
  },
  async detalhe(req, res) {
    const {_id}=req.params;
        const user = await Produtos.findOne({_id})
        res.json(user);
  },

  async inserir(req, res) {
    const {nome,preco,categoria,dataValidade,descricao,imagem_url}=req.body;
        let data={};
        
        let user = await Produtos.findOne({nome});
        if(!user){
            data = {nome,preco,categoria,dataValidade,descricao,imagem_url};
            user = await Produtos.create(data);
            return res.status(200).json(user)
        }else{
            return res.status(500).json(user)
        }
  },

  async apagar(req, res) {
    const {_id}=req.params
        const user = await Produtos.fondByIdAndDelete({_id})
  },

  async actualizar(req, res) {
    const {_id,nome,preco,categoria,dataValidade,descricao,imagem_url} = req.body;
        const data = {nome,preco,categoria,dataValidade,descricao,imagem_url};
        const user = await Produtos.findOneAndUpadate({_id},data,{new:true});
        res.json(user);
    
  },

  async updateImagens(req,res){
    const produtos = await Produtos.findOne({_id:req.params.id})
    if(!produtos){
      return res.status(400).send({error:"produto não encontrado"})
    
    }else{

      const novasImagens = req.files.map(item =>item.filename)
    produtos.imagem_url = produtos.imagem_url.filter(item = item).concat(novasImagens)
    }

 
    
  },


  async listarcategotia(req,res){
    const{_id}=req.params
    const user = await Produtos.findOne({_id}).select("_id nome").populate("categoria","nome")
    res.json(user);
  }




};
