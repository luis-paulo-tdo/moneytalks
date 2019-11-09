const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.listen(3000, () => console.log(`Servidor rodando na porta 3000`));

app.get('/', (request, response) => {
    response.send({ 
        title: 'Home' 
    });
});

app.get('/costs', (request, response) => {
    response.send({
        title: 'Costs'
    });
});
