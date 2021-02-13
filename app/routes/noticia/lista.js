module.exports = (prApp) => {
    return prApp.get('/noticia/lista', (prReq, prRes) => {
        prRes.render('noticia/lista')
    });
}