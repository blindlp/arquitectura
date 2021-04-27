import express from 'express';


const app = express();

app.get('/users', (req, res) => {
    res.send("List of Users");
});


export default app;

