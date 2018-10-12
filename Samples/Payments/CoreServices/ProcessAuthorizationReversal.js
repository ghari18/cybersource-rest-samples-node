'use strict'

var CybersourceRestApi = require('CyberSource');

/**
 * This is a sample code to call ReversalApi,
 * call authReversal method
 */
function processAuthorizationReversal() {
    try {
        var apiClient = new CybersourceRestApi.ApiClient();
        var instance = new CybersourceRestApi.ReversalApi(apiClient);

        var clientReferenceInformation = new CybersourceRestApi.V2paymentsClientReferenceInformation();
        clientReferenceInformation.code = "TC50171_3";

        var reversalInformation = new CybersourceRestApi.V2paymentsidreversalsReversalInformation();
        var reversalInformationAmountDetails = new CybersourceRestApi.V2paymentsidreversalsReversalInformationAmountDetails();
        reversalInformationAmountDetails.totalAmount = "102.21";
        reversalInformation.reason = "testing";
        reversalInformation.amountDetails = reversalInformationAmountDetails;

        var request = new CybersourceRestApi.AuthReversalRequest();
        request.clientReferenceInformation = clientReferenceInformation;
        request.reversalInformation = reversalInformation;

        instance.authReversal("5335624925716231904107", request, function (error, data, response) {
            if (error) {
                console.log("Error : " + error);
                console.log("Error : " + error.stack);
                console.log("Error status code : " + error.statusCode);
            }
            else if (data) {
                console.log("Data : " + JSON.stringify(data));
            }
            console.log("Response : " + JSON.stringify(response));

        });
    } catch (error) {
        console.log(error);
    }
};
if (require.main === module) {
    processAuthorizationReversal(function () {
        console.log('getMethod call complete.');
    });
}
module.exports.processAuthorizationReversal = processAuthorizationReversal;