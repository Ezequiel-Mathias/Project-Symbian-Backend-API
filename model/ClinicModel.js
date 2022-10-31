const Sequelize = require('sequelize')
const connection = require('../database/database')

const ClinicModel = connection.define(
    'tbl_pacientes',
    {
        cod_paciente:{
            type:Sequelize.INTEGER(10),
            primaryKey:true,
            autoIncrement:true,
            allowNull:false
        }, 
        nome_paciente:{
            type: Sequelize.STRING(500),
            allowNull:false
        },
        telefone_paciente:{
            type: Sequelize.STRING(10),
            allowNull:false
        },
        celular_paciente:{
            type: Sequelize.STRING(11),
            allowNull:false
        },
        email_paciente:{
            type: Sequelize.STRING(100),
            allowNull:false
        },
        nome_responsavel:{
            type: Sequelize.STRING(500),
            allowNull:true
        },
        telefone_responsavel:{
            type: Sequelize.STRING(10),
            allowNull:true
        }

    })

module.exports = ClinicModel;