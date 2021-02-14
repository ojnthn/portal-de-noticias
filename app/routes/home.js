/**
 * Pagina inicial
 * @param prApp
 * @returns {*}
 */
module.exports = (prApp) => {
    return prApp.get('/', (prReq, prRes) => {
        prRes.render("home/inicio");
    });
}