module.exports = () => {

    const tabela = 'noticia';

    /**
     * Busca todas as noticias
     * @param prConnection
     * @param prFunction
     */
    this.buscaNoticias = (prConnection, prFunction) => {

        const query = 'SELECT * FROM ' + tabela;
        prConnection
            .query(query, prFunction);

    }

    /**
     * Busca detalhes de uma notícia
     * @param prConnection
     * @param prFunction
     */
    this.buscaNoticia = (prConnection, prWhere, prFunction) => {

        let query = 'SELECT * FROM '+tabela+' WHERE 1 ';

        Object.keys(prWhere).forEach(function(k) {
            query+= 'AND '+k+' = '+prWhere[k]+' ';
        });

        prConnection
            .query(query, prFunction);

    }

    return this;

}