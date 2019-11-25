import express from 'express';
import mqtt from 'mqtt';
import jwt from 'jsonwebtoken';
import env from './env';
var client = mqtt.connect(env.Mqtt_C);
const app = express();

var router = express.Router();

 
/***************************************************************************************************************************************************************/
/************************************************************************ /auth ************************************************************************/
/**
 * @api {post} /auth auth
 * @apiDescription : for creating the JWT acccess token
 * @apiGroup : Auth
 * @apiName : auth
 * ***************************************************************************************************************************************************************
 * @apiParam {String} uUid       UserId
 * @apiParam {String} sessionId    User Session ID (default 0 needs to be sent)
 * @apiParam {String} password (only for other platform)    User password (encrypted)
 * ***************************************************************************************************************************************************************
 * @apiSuccess {Number=0,1}            Success           response status ( 0 for error, 1 for success )
 * @apiSuccess {Number}                Status             status code
 * @apiSuccess {String}                Message            response message string
 * @apiSuccess {String}                AppVersion         APP version
 * @apiSuccess {Object}                Result             result
 * ***************************************************************************************************************************************************************
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 201 OK
 *     {
 *      "Success": true,
 *       "Status": 200,
 *       "Message": "Success",
 *       "AppVersion": "1.0.0",
 *       "Result": [
 *         {
 *           "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1VWlkIjoiMTIxIiwic2Vzc2lvbklkIjoiMTIxIiwiaWF0IjoxNTEwMTE3NjMzLCJleHAiOjE1MTAxMjEyMzN9.osF7Cg9vcyrCzWJY_u5wss75wYFRXpppHu7-ke-SnUw"
 *         }
 *       ]
 *     }
 * @apiVersion 1.0.1
 */
router.post('/auth', function (req, res) {
    //taking request params in a var
    var data = req.body;
    data.headers = req.headers['platform'] || req.body.platform || "0";
    console.log(data)
    //checking params are valid or not
    req.checkBody('uUid', 'uUid is required').notEmpty();
    req.checkBody('sessionId', 'sessionId is required').notEmpty();

    req.asyncValidationErrors().then(function () {
        //checking user session 

        //cathing the validation errors and send back to the user with 400 status code 
    }).catch((errors) => {
        if (errors) {

        };
    });
})
//enabling JWT 
// route middleware to verify a token
/*
router.use(function (req, res, next) {

    // check header or url parameters or post parameters for token
    var token = req.body.token || req.query.token || req.headers['x-access-token'];

    // decode token
    if (token) {

        // verifies secret and checks exp
        jwt.verify(token, app.get('superSecret'), function (err, decoded) {
            if (err) {
                //creating page in pagerduty
                setTimeout(function () {
                    //  Util.pagerDutyCreate('JWT', 'Token Expired');
                })
                //it will occured if token will expired 
                //  Util.makeResponse(res, false, 403, 'Token Expired', '1.0.0', []);
            } else {
                // if everything is good, save to request for use in other routes
                req.decoded = decoded;
                next();
            }
        });

    } else {
        //creating page in pagerduty
        setTimeout(function () {
            Util.pagerDutyCreate('JWT', 'Token Invalid or not found');
        })
        // if there is no token
        // return an error


    }
});
*/

router.get("/", function (req, res) {
    res.sendFile(env.Views + "index.html");
});

router.post("/invoiceinfo", function (req, res) {
    console.log(req.body);
});

app.use('/jq', express.static(env.Base_D + '/node_modules/jquery/dist'));
app.use('/js', express.static(env.Base_D +'/node_modules/bootstrap/dist/js'));
app.use('/css', express.static(env.Base_D +'/node_modules/bootstrap/dist/css')); 
app.use("/", router);

app.listen(3000, function () {
    console.log("Live at Port 3000");
});


// client.on('connect', function () {
//     client.subscribe('presence', function (err) {
//         if (!err) {
//             client.publish('presence', 'Hello mqtt')
//         }
//     })
// })

// client.on('message', function (topic, message) {
//     // message is Buffer
//     console.log(message.toString())
//     // client.end()
// })