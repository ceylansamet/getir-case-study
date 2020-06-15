const mongoose = require("mongoose");
const {getirErrorHandle} = require("../utils/getirErrorHandle");


/**
 * @function initDatabase Database Connection
 *
 */

exports.initDatabase = async function initDatabase() {

    console.log("Connecting to getirApp database...");

    let getirDB, result;

    let url = process.env.MONGO_CONNECTION_STRING;

    try {
        await mongoose.connect(url, {useUnifiedTopology: true, useNewUrlParser: true});
        console.log("Connected to getirApp database successfully.")
    } catch (error) {
        throw new getirErrorHandle(500, error.message);
    }

   /* connections["getirApp"] = mongoose.connect(url,
        {
            useUnifiedTopology: true,
            useNewUrlParser: true
        }
    )
        .then(() => console.log("Connected to getirApp database successfully."))
        .catch(err => {
        err ? process.exit(1) : console.log("Connected to getirApp database successfully.");
    }); */


}