const express = require('express');

const app = express();

app.get("/message/:id/:user", (request, response) => {
   const { id, user } = request.params;
   
    response.send(`
        Message ID: ${id}.
        Para o usuário: ${user}.
        `);
    });

app.get("/users", (request, response) => {
    const { pages, limit } = request.query;

    response.send(`Pages ${pages}, Limit ${limit}`);
});

const PORT = 3333;
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));