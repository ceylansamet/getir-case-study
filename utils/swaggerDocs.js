const expressSwagger = require('express-swagger-generator');



function initSwagger() {

    try{
        let options = {
            swaggerDefinition: {
                info: {
                    description: 'Records App Documention',
                    title: 'Abdussamet CEYLAN ',
                    version: '1.0.0',
                },
                host: process.env.APP_URL,
                basePath: '/',
                produces: [
                    "application/json"
                ]
            },
            basedir: __dirname,
            files: ['./routes/*.js']
        };

        expressSwagger(options)
    }
    catch(e){
        console.error("Swagger initalize error!");
        process.exit(1);
    }

}


module.exports = {
    initSwagger: initSwagger
};