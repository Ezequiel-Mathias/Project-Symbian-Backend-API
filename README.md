# Projeto Sybian Clinic Backend

## Pre-requisitos antes de inicializar o projeto

### É necessário ter instalado

- Workbench Mysql

- NodeJs (Versão LTS)

### É necessário fazer:

- #### Criar um database no Workbench Mysql com o nome de dbprojectsybiamclinic, crie com o seguinte comando:
```
create database dbprojectsybiamclinic;
```
##### Obs: assim que o projeto é inicializado é criado uma tabela automaticamente, mais não o database, e por isso deve-se criar ele primeramente antes de inicializar o projeto.

- #### Configure a conexão do seu banco de dados no projeto

##### Acesse database/database.js e preencha a constante connection responsavel pela conexão com o seu banco de dados com seguintes dados:

#####       'dbprojectsybiamclinic',
#####        'Administrador do seu banco',
#####       'Senha do seu banco',
##### {
##### host: "Aonde seu banco está"
##### dialect: "Nome do seu banco de dados
##### port: Porta do seu banco de dados
##### }

## Inicializando o projeto

- #### Feito o passo a passo de Pre-requisitos antes de inicializar o projeto acima,  basta abrir o terminal entrar na pasta Project-Symbian-Clinic-Backend e rodar os seguintes comandos:

```
npm i
```
######  em seguida rode o comando para inicializar o projeto com o Nodemon
```
npm start
```
###### ou inicialize normalmente sem o Nodemon com o comando
```
node index.js
```




