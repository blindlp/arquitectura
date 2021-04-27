
import express from 'express';
import http from 'http';


const app = express();

app.get('/users', (req, res) => {
    res.send("List of Users");
});


const server = http.createServer(app);

server.listen(4600, () => {
    console.log('Server is running on port 4600');
});
