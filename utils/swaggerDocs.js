exports.getSwaggerConfig = function getSwaggerConfig(){

    try{
        return {
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

    }
    catch(e){
        console.error("Swagger initalize error!");
        process.exit(1);
    }

}

