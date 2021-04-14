const express = require('express');

var Categoria = require("./controllers/categoria.controller");
var Cidade = require("./controllers/cidade.controller");
var Cliente = require("./controllers/cliente.controller");
var Pedido = require("./controllers/pedidos.controller");
var Produto = require("./controllers/produtos.controller");
var Restourante = require("./controllers/restourante.controller");

const routes = express.Router();
//cliente rotas
routes.get("/api/categorias", Cliente.listar);
routes.get("/api/categorias/:_id", Cliente.detalhe);
routes.post("/api/categorias", Cliente.inserir);
routes.delete("/api/categorias/:_id", Cliente.apagar);
routes.put("/api/categorias/:_id", Cliente.actualizar);

// restourante
routes.get("/api/restourante", Restourante.listar);
routes.get("/api/restourante/:_id", Restourante.detalhe);
routes.post("/api/restourante", Restourante.inserir);
routes.delete("/api/restourante/:_id", Restourante.apagar);
routes.put("/api/restourante/:_id", Restourante.actualizar);

//categorias
routes.get("/api/categorias", Categoria.listar);
routes.get("/api/categorias/:_id", Categoria.detalhe);
routes.post("/api/categorias", Categoria.inserir);
routes.delete("/api/categorias/:_id", Categoria.apagar);
routes.put("/api/categorias/:_id", Categoria.actualizar);
//Categorias com os produtos 
routes.get("/api/categoria/:_id",Categoria.listarProdutos);



//Produtos
routes.get("/api/produtos", Produto.listar);
routes.get("/api/produtos/:_id", Produto.detalhe);
routes.post("/api/produtos", Produto.inserir);
routes.delete("/api/produtos/:_id", Produto.apagar);
routes.put("/api/produtos/:_id", Produto.actualizar);
routes.put("/api/produtosIMG/:_id", Produto.updateImagens);

routes.get("/api/produto/:_id", Produto.listarcategotia);



//cidade
routes.get("/api/cidade", Cidade.listar);
routes.get("/api/cidade/:_id", Cidade.detalhe);
routes.post("/api/cidade", Cidade.inserir);
routes.delete("/api/cidade/:_id", Cidade.apagar);
routes.put("/api/cidade/:_id", Cidade.actualizar);

//pedidos
routes.get("/api/pedidos", Pedido.listar);
routes.get("/api/pedidos/:_id", Pedido.detalhe);
routes.post("/api/pedidos", Pedido.inserir);
routes.delete("/api/pedidos/:_id", Pedido.apagar);
routes.put("/api/pedidos/:_id", Pedido.actualizar);

//categoria
routes.get("/api/categoria", Categoria.listar);
routes.get("/api/categoria/:_id", Categoria.detalhe);
routes.post("/api/categoria", Categoria.inserir);
routes.delete("/api/categoria/:_id", Categoria.apagar);
routes.put("/api/categoria/:_id", Categoria.actualizar);

module.exports = routes;