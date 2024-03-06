
const express = require('express');
const bodyParser = require('body-parser');
//import { json } from 'body-parser';
//import express from 'express';
// import { currentUserRouter } from "./routes/current-user";
import { signInRouter } from "./routes/signin";
import { signOutRouter } from "./routes/signout";
import { signUpRouter } from "./routes/signup";

const app = express();
app.use(bodyParser.json());

// app.use(currentUserRouter);
app.use(signInRouter);
app.use(signOutRouter);
app.use(signUpRouter);

app.get('/api/users/currentuser',(req : any, res: any) => {
    res.send('Hiasdfasdf');
});

app.listen(3000, () => {
    console.log('Listening to 3000 Auth !! Working');
});