const cors = require('cors');
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const Sandbox = require('sandbox')
const sandbox = new Sandbox()

const PORT = process.env.PORT || 3000

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/saida', (req, res) => {
  sandbox.run(req.body, saida => {
    res.send({
      retorno: saida.result,
      impressoes: saida.console
    })
  })
});

app.listen(PORT, () => {
  console.log(`Servidor rodando a porta ${PORT}`);
})
