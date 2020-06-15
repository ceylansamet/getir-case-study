const mongoose = require("mongoose");
var connections = {};


/**
 * @function initDatabase Database Connection
 *
 */

function initDatabase() {

    console.log("Connecting to getirApp database...");

    let getirDB, result;

    let url = process.env.MONGO_CONNECTION_STRING;


    connections["getirApp"] = mongoose.connect(url,
        {
            useUnifiedTopology: true,
            useNewUrlParser: true
        }
    )
        .then(() => console.log("Connected to getirApp database successfully."))
        .catch(err => {
        err ? process.exit(1) : console.log("Connected to getirApp database successfully.");
    });


}


module.exports = {
    initDatabase: initDatabase
};