const express = require('express'),
    app     = express();

// Define ao Express que o motor de geração de views será o EJS
app.set('view engine', 'ejs');

app.get('/', (prReq, prRes) => {
    prRes.render("home/inicio");
});

app.get('/admin/noticia/form', (prReq, prRes) => {
   prRes.render('admin/noticia/form');
});

app.get('/noticia/lista', (prReq, prRes) => {
   prRes.render('noticia/lista')
});

app.get('/noticia/id', (prReq, prRes) => {
   prRes.render('noticia/noticia')
});

app.listen(3000, () => console.log('Server running with Express'));