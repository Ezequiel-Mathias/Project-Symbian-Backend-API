# Projeto Sybian Clinic Backend

## Pre-requisitos antes de inicializar o projeto

### É necessário ter instalado

- Workbench Mysql

### É necessário fazer

- #### Criar um database no Workbench Mysql com o nome de dbprojectsybiamclinic, crie com o seguinte comando:
```
create database dbprojectsybiamclinic;
```
##### Obs: assim que o projeto é inicializado é criado uma tabela automaticamente, mais não o database, e por isso deve-se criar ele primeramente antes de inicializar o projeto.

- #### Configure a conexão do seu banco de dados no projeto

##### Acesse a pasta database/database.js e preencha a constante connection responsavel pela conexão com o seu banco de dados com seguintes dados:

#####   "Nome do banco",
#####        "Administrador",
#####       "Senha do banco",
##### {
##### host: "Aonde seu banco está"
##### dialect: "nome do seu banco de dados
##### port: porta do seu banco de dados
##### }





