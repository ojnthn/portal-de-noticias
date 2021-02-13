module.exports = (prApp) => {
    return prApp.get('/noticia/id', (prReq, prRes) => {
        prRes.render('noticia/noticia')
    });
}