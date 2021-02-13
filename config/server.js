const   express = require('express'),
    app     = express();

// Define ao Express que o motor de geração de views será o EJS
app.set('view engine', 'ejs');
// Define onde as views serão armazenadas
app.set('views', './app/views');

module.exports = app;