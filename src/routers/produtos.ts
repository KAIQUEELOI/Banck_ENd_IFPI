import { Router } from "express";

const router = Router();

const produtos = [
    { id: 1, nome: "Coca-Cola", preco: 15 }
];

// Listar produtos
router.get("/", (req, res) => {
    res.json(produtos);
});

// Adicionar produto
router.post("/", (req, res) => {

    const { nome, preco } = req.body;

    const produtoNovo = {
        id: produtos.length + 1,
        nome,
        preco
    };

    produtos.push(produtoNovo);

    res.status(201).json({
        mensagem: "Produto adicionado com sucesso!",
        produto: produtoNovo
    });

});

// Atualizar produto
router.put("/:id", (req, res) => {

    const id = Number(req.params.id);

    const produto = produtos.find(p => p.id === id);

    if (!produto) {
        return res.status(404).json({
            mensagem: "Produto não encontrado!"
        });
    }

    produto.nome = req.body.nome;
    produto.preco = req.body.preco;

    res.json({
        mensagem: "Produto atualizado com sucesso!",
        produto
    });

});

export default router;