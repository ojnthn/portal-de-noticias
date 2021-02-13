const   app = require('./config/server');

// Definição das rotas
const   routeHome                = require('./app/routes/home')(app),
        routeAdminNoticiaForm    = require('./app/routes/admin/noticia/form')(app),
        routeNoticiaLista        = require('./app/routes/noticia/lista')(app),
        routeNoticia             = require('./app/routes/noticia/noticia')(app);

app.listen(3000, () => console.log('Server running with Express'));