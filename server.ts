import express from "express";
import helmet from "helmet";
import path from "path";
import { fileURLToPath } from "url";


const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const server = express();

server.use(helmet());
server.use(express.json());
server.use(express.urlencoded({extended: true }));

server.use(express.static(path.join(dirname, "../public")));


server.get('/', (req, res) => {
    let name = "kaique elooi";
    let idade = 22;

    res.send(`Olá eu me chamo ${name}, e tenho ${idade}, anos`);
})


import produtosRoutes from "./src/routers/produtos.js";
import pingRoutes from "./src/routers/ping.js";
import voosRoutes from "./src/routers/voos.js";

server.use("/produtos", produtosRoutes);
server.use("/ping", pingRoutes);
server.use("/voos", voosRoutes);
server.use("/alunos", alunosRoutes);

 server.listen(3000, () => {
        console.log("Servidor rodando 100%")
    })