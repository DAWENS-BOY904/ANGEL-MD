const express = require('express');
const app = express();
__path = process.cwd();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 8000;
let code = require('./pair'); 

require('events').EventEmitter.defaultMaxListeners = 500;

// Body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/code', code);

app.use('/pair', async (req, res, next) => {
    res.sendFile(__path + '/pair.html');
});

// Optional: si ou vle redirect root '/' sou /pair
app.get('/', (req, res) => {
    res.redirect('/pair');
});

// Start server
app.listen(PORT, () => {
    console.log(`
Don't Forget To Give Star ‼️
Server running on http://localhost:` + PORT);
});

module.exports = app;
