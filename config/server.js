const   express = require('express'),
        consign = require('consign'),
        app     = express();
/**
 * Configura o servidor a view engine, e as rotas da aplicação
 * @param prDir
 * @returns {*|Express}
 */
module.exports = (prDir) => {
    // Define ao Express que o motor de geração de views será o EJS
    app.set('view engine', 'ejs');
    // Define onde as views serão armazenadas
    app.set('views', './app/views');

    // Definição de rotas estáticas
    app.use('/js',  express.static(prDir + '/node_modules/bootstrap/dist/js'));
    app.use('/js',  express.static(prDir + '/node_modules/jquery/dist'));
    app.use('/css', express.static(prDir + '/node_modules/bootstrap/dist/css'));

    // Autoload de rotas
    consign()
        .include('./app/routes')
        .then('config/database.js')
        .then('app/models')
        .into(app);

    return app;
}