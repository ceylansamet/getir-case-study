exports.success = function(res, data, statusCode, message){
     res.status(statusCode).json({
        "code": 0,
        "msg": message,
        "records": data
    });
};

exports.error = function(res, data, statusCode, message){
    res.status(statusCode).send({
        "code": 1,
        "msg": message,
        "records": data
    });
};