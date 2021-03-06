'use strict'

var path = require('path');
var filePath = path.resolve('Data/Configuration.js');
var Configuration = require(filePath);
var CybersourceRestApi = require('cybersource-rest-client');
var ProcessPayment = require('./ProcessPayment');

/**
 * This is a sample code to call ReversalApi,
 * call authReversal method
 */
function processAuthorizationReversal(callback) {
    try {
        var configObject = new Configuration();
        var instance = new CybersourceRestApi.ReversalApi(configObject);

        var clientReferenceInformation = new CybersourceRestApi.Ptsv2paymentsClientReferenceInformation();
        clientReferenceInformation.code = "test_reversal";

        var reversalInformation = new CybersourceRestApi.Ptsv2paymentsidreversalsReversalInformation();
        var reversalInformationAmountDetails = new CybersourceRestApi.Ptsv2paymentsidreversalsReversalInformationAmountDetails();
        reversalInformationAmountDetails.totalAmount = "102.21";
        reversalInformation.reason = "testing";
        reversalInformation.amountDetails = reversalInformationAmountDetails;

        var request = new CybersourceRestApi.AuthReversalRequest();
        request.clientReferenceInformation = clientReferenceInformation;
        request.reversalInformation = reversalInformation;

        var enableCapture = false;

        ProcessPayment.processPayment(function (error, data) {
            if (data) {
                var id = data['id'];
                console.log("\n*************** Authorizarion Reversal ********************* ");
                console.log("Payment ID passing to authReversal : " + id);

                instance.authReversal(id, request, function (error, data, response) {
                    if (error) {
                        console.log("\nError in authReversal: " + error);
                    }
                    else if (data) {
                        console.log("\nData of authReversal : " + JSON.stringify(data));
                    }
                    console.log("\nResponse of  authReversal  : " + JSON.stringify(response));
                    console.log("\nResponse Code of authReversal : " + JSON.stringify(response['status']));
                    callback(error, data);
                });

            }
        }, enableCapture);

    } catch (error) {
        console.log(error);
    }
};
if (require.main === module) {
    processAuthorizationReversal(function () {
        console.log('Process Authorization Reversal end');
    });
}
module.exports.processAuthorizationReversal = processAuthorizationReversal;