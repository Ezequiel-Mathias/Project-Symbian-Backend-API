const express = require('express');

const app = express();

app.use(express.json());

const ClinicController = require('./controller/ClinicController')

app.use('/' , ClinicController);

app.listen(3000, () => {
    console.log('Aplicação rodando em - https://localhost:3000')
})
