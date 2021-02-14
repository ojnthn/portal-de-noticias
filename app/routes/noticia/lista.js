/**
 * Pagina com listagem das noticias
 * @param prApp
 * @returns {*}
 */
module.exports = (prApp) => {

    return prApp.get('/noticia/lista', (prReq, prRes) => {

        const connection = prApp.config.database(),
            model = prApp.app.models.noticia;

        model.buscaNoticias(connection, (prErro, prResultado) => {

            prRes.render('noticia/lista', {
                aNoticias   : prResultado
            });

        });

    });

}