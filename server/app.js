import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import express from 'express';
import logger from 'morgan';
import session from 'express-session';
import SessionFileStore from 'session-file-store';
import Routes from './Routes';


const app = express();
const FileStore = SessionFileStore(session);
const port = parseInt(process.env.PORT, 10) || 8000;

// Settings
app.set('view engine', 'ejs');

// middlewares
app.use(express.static('static-files')); // serve static files
app.use(bodyParser.json()); // Parse body objects
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser()); // Parse cookie

// Session
app.use(session({
    secret: 'enKhing',
    resave: true,
    saveUninitialized: true,
    store: new FileStore()
}));


// Log to console
app.use(logger('combined'));

// Routes
app.use('/', Routes);

app.listen(port);
