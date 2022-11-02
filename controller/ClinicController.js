const express = require('express')

const SybiamModel = require('../model/ClinicModel')

const router = express.Router();

const { body, validationResult } = require('express-validator')

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json())

//ROTA DE LISTAGEM
router.get('/listarRegistros', (req, res) => {
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

router.post('/registrarRegistro', [
    body("nome_paciente").isLength({ max: 500 })
        .withMessage("O nome do paciente não pode ultrapassar 500 caracteres"),

    body("email_paciente").isEmail().withMessage("Insira um email valido !"),

    body("telefone_paciente").isLength(10).withMessage('O telefone do paciente deve ter exatamente 10 numeros')
        .isNumeric().withMessage('O telefone do paciente não deve conter letras ou simbolos'),

    body("celular_paciente").isLength(11).withMessage("O celular do paciente tem que ter exatamente 11 numeros")
        .isNumeric().withMessage("O celular do paciente não deve conter letras ou simbolos"),

    body("nome_responsavel").isLength({ max: 500 })
    .withMessage("O nome do responsável não pode ultrapassar 500 caracteres"),

    body("telefone_responsavel").isLength({ max: 11 }).withMessage("O telefone do responsavel não deve ultrapassar mais de 11 numeros")

], (req, res) => {

    const erros = validationResult(req);

    if (!erros.isEmpty()) {
        return res.status(400).json({ erros: erros.array() })
    } else {

        SybiamModel.create({
            nome_paciente: req.body.nome_paciente,
            telefone_paciente: req.body.telefone_paciente,
            celular_paciente: req.body.celular_paciente,
            email_paciente: req.body.email_paciente,
            nome_responsavel: req.body.nome_responsavel,
            telefone_responsavel: req.body.telefone_responsavel
        }).then(
            () => {
                res.status(201).json({ "Mensagem": "Paciente Cadastrado com sucesso" })
            }
        ).catch(
            (error) => {
                res.status(500).json({ "Mensagem": error })
            }
        )
    }

})


//ROTA DE EXCLUSÃO 
router.delete('/excluirRegistro/:cod_paciente', (req, res) => {

    let { cod_paciente } = req.params;

    SybiamModel.destroy({
        where: { cod_paciente }
    })
        .then(
            () => {
                res.status(200).json({ "Mensagem": "Registro de paciente excluido com sucesso" })
            }
        ).catch(
            (error) => {
                res.status(500).json({ "MSG": error })
            }
        )
})


//ROTA DE EXCLUSÃO 
router.put('/alterarRegistro', [

    body("cod_paciente").isNumeric().withMessage("O cod_paciente deve ser um numero !"),

    body("nome_paciente").isLength({ max: 500 })
        .withMessage("O nome do paciente não pode ultrapassar 500 caracteres"),

    body("email_paciente").isEmail().withMessage("Insira um email valido !"),

    body("telefone_paciente").isLength(10).withMessage('O telefone do paciente deve ter exatamente 10 numeros')
        .isNumeric().withMessage('O telefone do paciente não deve conter letras ou simbolos'),

    body("celular_paciente").isLength(11).withMessage("O celular do paciente tem que ter exatamente 11 numeros")
        .isNumeric().withMessage("O celular do paciente não deve conter letras ou simbolos"),

    body("nome_responsavel").isLength({ max: 500 })
    .withMessage("O nome do responsável não pode ultrapassar 500 caracteres"),

    body("telefone_responsavel").isLength({ max: 11 }).withMessage("O telefone do responsavel não deve ultrapassar mais de 11 numeros")

], (req, res) => {

    const erros = validationResult(req);

    if (!erros.isEmpty()) {
        return res.status(400).json({ erros: erros.array() })
    } else {
    let{cod_paciente} = req.body;
    SybiamModel.update(
        {
            cod_paciente,
            nome_paciente: req.body.nome_paciente,
            telefone_paciente: req.body.telefone_paciente,
            celular_paciente: req.body.celular_paciente,
            email_paciente: req.body.email_paciente,
            nome_responsavel: req.body.nome_responsavel,
            telefone_responsavel: req.body.telefone_responsavel
        },
        { where: { cod_paciente } }
    ).then(
        () => {
            res.status(200).json({ "Mensagem": "Registro de paciente alterado com sucesso" })
        }
    ).catch(
        (error) => {
            res.status(500).json({ "Mensagem": error })
        }
    )
    }
})


module.exports = router