const express = require('express');
const app = express();
const { readFile } = require('fs').promises;

app.get('/', async (request, response) => {
    response.send(await readFile('./index.html', 'utf-8'));
});

app.get('/about.html', async (request, response) => {
    response.send(await readFile('./about.html', 'utf-8'));
});

app.get('/contact-me.html', async (request, response)  => {
    response.send(await readFile('./contact-me.html', 'utf-8'));
});

app.use(async (request, response) => {
    response.status(404).send(await readFile('./404.html', 'utf-8'));
});

app.listen(process.env.PORT || 8080);