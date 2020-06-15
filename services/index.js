const {body, validationResult} = require('express-validator')
const getirResponse = require("../utils/getirResponse");
const {getirErrorHandle} = require("../utils/getirErrorHandle");
var recordModel = require('../models/record');


/**
 * @function records
 * @description {post} /getirApi action method of getRecords
 *
 * @param  {HttpRequest} [request] Http Request
 * @param  {HttpResponse} [response] Http Response
 *
 * @return HttpResponse
 */


exports.getRecords = async (req,resp, next) => {
    const errors = validationResult(req);

    if(!errors.isEmpty())
    {
        return getirResponse.error(resp,"",400,"Check Parameters!");
    }

    let {startDate, endDate, minCount, maxCount} = req.body;
    maxCount = parseInt(maxCount);
    minCount = parseInt(minCount)
    try
    {
        const record = await recordModel.aggregate(
            [
                {
                    $addFields: {
                        totalCount: {
                            $sum: '$counts'
                        }
                    }
                },
                {
                    $match: {
                        createdAt: {
                            $gte: new Date(startDate),
                            $lte: new Date(endDate)
                        },
                        totalCount: {
                            $gte: minCount,
                            $lte: maxCount
                        }
                    }
                },
                {
                    $project: {
                        _id: 0,
                        key: '$key',
                        createdAt: '$createdAt',
                        totalCount: '$totalCount'
                    }
                },
                {$sort: {createdAt: 1}},
                {$limit: parseInt(100)}
            ]
        );

        return getirResponse.success(resp,record,200,"Success");

    } catch (e) {
       throw new getirErrorHandle(400, e.message)
    }
}


/**
 * @function validate
 * @description validator method
 *
 * @param  {param} Bug Fix!
 *
 * @return Error Object Array
 */

exports.validate = (param) => {
    return [
        body('minCount').exists().isInt(),
        body('maxCount').exists().isInt(),
        body('startDate').exists(),
        body("endDate").exists()
    ]
}

