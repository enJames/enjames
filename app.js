import express from 'express';
import logger from 'morgan';
import path from 'path';

const app = express();
const port = parseInt(process.env.PORT, 10) || 8000;
const root = { root: path.join(__dirname, 'views') };

// Set folder to serve static files from
app.use(express.static('static-files'));

// Log to console
app.use(logger('combined'));

// Routes
app.get('/', (req, res) => {
    res.sendFile('index.html', root);
});
app.get('/thedream', (req, res) => {
    res.sendFile('thedream.html', root);
});
app.get('/why', (req, res) => {
    res.sendFile('why.html', root);
});
app.get('/about', (req, res) => {
    res.sendFile('about.html', root);
});

app.listen(port);
