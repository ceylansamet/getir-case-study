const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/**
 * @description Record object value schema declare!
 *
 */
let record = new Schema(
    {
        key: {
            type: String
        },
        createdAt: {
            type: Date
        },
        counts: {
            type: Array
        },
        value: {
            type: String
        }
    },
    { collection: "records" }
);

module.exports = mongoose.model("Record", record);