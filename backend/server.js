// backend/server.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Adicione aqui suas rotas e lógica de negócios para o backend

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
