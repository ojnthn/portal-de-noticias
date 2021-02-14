const mysql = require('mysql'),
    connection = () => {

        return mysql.createConnection({
            host     : 'localhost',
            user     : 'root',
            password : 'root',
            database : 'portal_noticias'
        });

    }

module.exports = () => {
    return connection;
}
