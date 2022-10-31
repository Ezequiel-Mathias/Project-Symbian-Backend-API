const Sequelize = require('sequelize');

const connection = new Sequelize(
    'dbprojectsybiamclinic',
    'root',
    'bcd127',
    {
        host:'localhost',
        dialect:'mysql',
        port:3306
        
    }
);

module.exports = connection;
