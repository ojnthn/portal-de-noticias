/**
 * Pagina com as informações de uma notícia
 * @param prApp
 */
module.exports = (prApp) => {

    return prApp.get('/noticia/:prNoticiaId', (prReq, prRes) => {

        const connection = prApp.config.database(),
            model = prApp.app.models.noticia;

        model.buscaNoticia(connection, {
            id : prReq.params.prNoticiaId,
        }, (prErro, prResultado) => {

            if (prResultado.length <= 0)
                prRes.redirect('lista');

            prRes.render("noticia/noticia", {
                head        : '/base/head.ejs',
                aNoticia    : prResultado
            });

        });

    });

}