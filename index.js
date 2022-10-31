
(async () => {

    const database = require('./database/database');

    //Esse const faz a referencia das tabelas que devem ser criadas automaticamente
    const ClinicModel = require('./model/ClinicModel');

    //Cria a tabela no banco caso ela não exista assim que rodar o node index.js, mais no entanto o banco pelo menos tem que estar criado na mão la no mysql
    await database.sync();

    const express = require('express');

    const app = express();

    app.use(express.json());

    const ClinicController = require('./controller/ClinicController');

    app.use('/', ClinicController);

    app.listen(3000, () => {
        console.log('APLICAÇÃO RODANDO EM - https://localhost:3000');
    });




})();
