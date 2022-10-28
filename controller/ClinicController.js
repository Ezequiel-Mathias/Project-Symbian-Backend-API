const express = require('express')

const router = express.Router();

router.get('/listarPaciente', (req , res) => {
    return res.status(200).send('testedaslkdaslkadçlkdaaaaaaa')
})

router.post('/registrarPaciente' , (req , res) => {
    return res.status(200).send('testePost2')
})


module.exports = router