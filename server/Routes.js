import express from 'express';
import path from 'path';
import Invitees from './Invitees';

const Routes = express.Router();
const root = { root: path.join(__dirname, '../views') };

// Routes
Routes.get('/', (req, res) => {
    res.sendFile('index.html', root);
});
Routes.post('/', (req, res) => {
    const { passcode } = req.body;

    if (Invitees[passcode]) {
        req.session.name = Invitees[passcode];
        return res.redirect('/why');
    }
    return res.status(404).json({
        message: 'passcode not found'
    });
});
Routes.get('/thedream', (req, res) => {
    res.sendFile('thedream.html', root);
});
Routes.get('/why', (req, res) => {
    if (req.session.name) {
        const { name } = req.session;
        return res.render('why', { name });
    }
    return res.sendFile('why.html', root);
});
Routes.get('/about', (req, res) => {
    res.sendFile('about.html', root);
});

export default Routes;
