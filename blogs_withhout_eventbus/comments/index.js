
const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const comments = {};

app.get('/posts/:id/comments',(req,res) => {
    res.status(201).send(comments[req.params.id] || []);
});

app.post('/posts/:id/comments',(req,res) => {
    const commentId = randomBytes(4).toString('hex');
    const { content } = req.body;
    const comment = comments[req.params.id] || [];
    comment.push({id:commentId,content});
    comments[req.params.id] = comment;
    res.status(201).send(comment);
});

app.listen(4001, () => {
    console.log('Listening to Comment Port 4001');
});