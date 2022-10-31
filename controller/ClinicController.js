const express = require('express')

const SybiamModel = require('../model/ClinicModel')

const router = express.Router();

router.get('/listarPaciente', (req, res) => {
    SybiamModel.findAll()
        .then(
            (pacientes) => {
                res.status(200).send(pacientes);
            }
        )
        .catch(
            (error) => {
                res.status(500).json({ "MSG": error });
            }
        )
})

router.post('/registrarPaciente', (req, res) => {

    let { nome_paciente,
        telefone_paciente,
        celular_paciente,
        email_paciente,
        nome_responsavel,
        telefone_responsavel
    } = req.body

    SybiamModel.create({
        nome_paciente,
        telefone_paciente,
        celular_paciente,
        email_paciente,
        nome_responsavel,
        telefone_responsavel
    }).then(
        () => {
            res.status(201).json({ "Mensagem": "Paciente Cadastrado com sucesso" })
        }
    ).catch(
        (error) => {
            res.status(500).json({ "Mensagem": error })
        }
    )
})


router.delete('/excluirLivros/:cod_paciente', (req, res) => {

    let { cod_paciente } = req.params;

    SybiamModel.destroy({
        where: { cod_paciente }
    })
        .then(
            () => {
                res.status(200).json({ "MSG": "REGISTRO DE PACIENTE EXCLUIDO COM SUCESSO" })
            }
        ).catch(
            (error) => {
                res.status(500).json({"MSG" : error})
            }
        )
})


module.exports = router