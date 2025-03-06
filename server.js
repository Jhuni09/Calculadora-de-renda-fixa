const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Define o diretório público para arquivos estáticos (como HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Inicia o servidor
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
