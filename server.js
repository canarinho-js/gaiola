const express = require('express')
const app = express()

const Sandbox = require('sandbox')
const sandbox = new Sandbox()

const PORT = process.env.PORT || 3000

app.get('/saida/:entrada', (req, res) => {
  sandbox.run(req.params.entrada, saida => {
    res.send({
      retorno: saida.result,
      impressoes: saida.console
    })
  })
})

app.listen(PORT, () => {
  console.log(`Servidor rodando a porta ${PORT}`);
})
