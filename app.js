var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser')
var logger = require('morgan');
const {handleError} = require('./utils/getirErrorHandle');
var cors = require('cors');
const route = require('./routes/index');


var indexRouter = require('./routes/index');



var app = express();
const expressSwagger = require('express-swagger-generator')(app);

app.use(cors());
app.options('*', cors());

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
            "application/x-www-form-urlencoded"
        ]
    },
    basedir: __dirname,
    files: ['./routes/*.js']
};

expressSwagger(options);


app.use(logger('dev'));
app.use(express.json());
//app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(bodyParser.urlencoded())
//app.use(bodyParser.json());

app.use('/', indexRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    console.log(err);
    handleError(err, res);
});

module.exports = app;
