import { Router } from "express";

const router = Router();

const alunos = [
    { id: 1, nome: "KAIQUE", curso: "INFO" }
    
];

router.get('/', (req, res) => {
    res.json(alunos);

});

// GET /alunos/:id
router.get("/:id", (req, res) => {

    const id = Number(req.params.id);

    const aluno = alunos.find(a => a.id === id);

    if (!aluno) {
        return res.status(404).json({
            mensagem: "Aluno não encontrado!"
        });
    }

    res.json(aluno);
});


router.put('/', (req,res) => {
    const {id , nome, curso } = req.body;

    const aluno = alunos.find(a => a.id === id );

     if (!aluno) {
        return res.status(404).json({
            mensagem: "Aluno não encontrado!"
        });
    }
    
    aluno.nome = nome;
    aluno.curso = curso;

    res.json({
        mensagem: "Aluno atualizado com sucesso!",
        aluno
    });

});
    

// POST /alunos
router.post("/", (req, res) => {

    const { nome, curso } = req.body;

    const novoAluno = {
        id: alunos.length + 1,
        nome,
        curso
    };

    alunos.push(novoAluno);

    res.status(201).json({
        mensagem: "Aluno cadastrado com sucesso!",
        aluno: novoAluno
    });
});

// DELETE /alunos/:id
router.delete("/:id", (req, res) => {

    const id = Number(req.params.id);

    const indice = alunos.findIndex(a => a.id === id);

    if (indice === -1) {
        return res.status(404).json({
            mensagem: "Aluno não encontrado!"
        });
    }

    alunos.splice(indice, 1);

    res.json({
        mensagem: "Aluno removido com sucesso!"
    });
});

export default router; 