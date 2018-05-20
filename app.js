import express from 'express';
import logger from 'morgan';

const app = express();
const port = parseInt(process.env.PORT, 10) || 8000;

// Set folder to serve static files from
app.use(express.static('static-files'));

// Log to console
app.use(logger('combined'));

// Routes
app.use('/', (req, res) => {
    res.sendFile('views/index.html');
});
app.use('/thedream', (req, res) => {
    res.sendFile('thedream.html');
});
app.use('/why', (req, res) => {
    res.sendFile('why.html');
});
app.use('/about', (req, res) => {
    res.sendFile('about.html');
});

app.listen(port);
