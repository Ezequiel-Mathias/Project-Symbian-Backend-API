const express = require('express');

const ClinicController = require('./controller/ClinicController');

require('./database')
const app = express();
app.use('/', ClinicController);
app.use(express.json());

app.listen(3000, () => {
    console.log('Aplicação rodando em - https://localhost:3000')
})
