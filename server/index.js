const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send('<form action="/" method="post"><input type="text" name="user"/><input type="submit" value="Enviar"/></form>');
});

app.post('/', (req, res) => {
    console.log(req);
    res.send(JSON.stringify(req.body));
});

app.get('/about', (req, res) => {
    res.send('about');
});

app.get('/hola/:message', (req, res) => {
    const message = req.params.message;
    res.send(`Hola ${message}`);
});

app.route('/book')
    .get((req, res) => {
        res.send({message: "GET Book"});
    })
    .post((req, res) => {
        res.send({message: "POST Book"});
    })
    .put((req, res) => {
        res.send({message: "PUT Book"});
    });

app.all('*', (req, res) => {
    res.send({ message: "not found!"});
});

app.listen(port, ( ) => {
    console.log(`Server running at port ${port}`);
});