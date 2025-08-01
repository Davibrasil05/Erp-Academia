const express  = require ("express");
const app = express();
const port = 3000;

app.get("/", function (req, res){
    res.send("hello world, teste1");
   // res.send("teste 1"); não pode mais de um res (resposta à requisição)
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}/`); // usa crase " ` " inves de aspas simples
});