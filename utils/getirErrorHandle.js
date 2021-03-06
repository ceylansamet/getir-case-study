const {error} = require('./getirResponse');
const getirResponse = require("./getirResponse");

exports.getirErrorHandle =  class getirErrorHandle extends Error {
    constructor(statusCode, message) {
        super();
        this.statusCode = statusCode;
        this.message = message;
    }
}

exports.handleError = (err, res) => {
    console.log("handle");
    const { statusCode, message } = err;
    getirResponse.error(res,"",statusCode,message)
};

