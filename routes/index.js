var express = require('express');
var router = express.Router();
var controller = require("../services");

router.get('/', (req, res) => {
    res.redirect('/api-docs')
});



/**
 * @typedef Body
 * @property {integer} minCount.required - Minimum count value (Sample: 1000) - eg: 1000
 * @property {integer} maxCount.required - Maximum count value (Sample: 10000) - eg: 10000
 * @property {string} startDate - Start Date (Sample: "2016-02-02") - eg: 2016-02-02
 * @property {string} endDate - End Date (Sample: "2019-02-02")  - eg: 2018-02-02
 */

/**
 * @typedef Error
 * @property {integer} code.required
 * @property {string} msg.required
 * @property {string} records.required
 */

/**
 * @typedef Response
 * @property {[integer]} code.required
 * @property {string} msg.required
 * @property {array} records.required
 */


/**
 * This function comment is parsed by doctrine
 * @route POST /getirApp
 * @group GetirApp - Records App Documention
 * @param {Body.model} body.body.required - getirApp Request Body Params
 * @returns {Response.model} 200 - An array of user info
 * @returns {Error.model}  default - {"code": 1,"msg": "Not Found","records": ""}
 * @returns {Array.<Body>} Point - Response Object Array
 */

router.post('/getirApp',controller.validate("checkParams"), controller.getRecords);

module.exports = router;
