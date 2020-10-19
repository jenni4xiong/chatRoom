const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '../client/build')))

app.get('/chats', (req, res) => {

})

app.get('/chats/:id/comments', (req, res) => {

})

app.post('/chats/:id/comments', (req, res) => {

})

app.post('/chats/:id', (req, res) => {

})

app.delete('/chats/:id', (req, res) => {

})

app.put('/chats/:id', (req, res) => {

})

app.listen(8080)
