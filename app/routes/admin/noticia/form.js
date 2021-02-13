module.exports = (prApp) => {
    return prApp.get('/admin/noticia/form', (prReq, prRes) => {
        prRes.render('admin/noticia/form');
    });
}