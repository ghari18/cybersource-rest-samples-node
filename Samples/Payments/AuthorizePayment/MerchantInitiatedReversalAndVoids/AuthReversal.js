'use strict'

var CybersourceRestApi = require('CyberSource');

/**
 * This is a sample code to call ReversalApi,
 * Process an Authorization Reversal
 * Include the payment ID in the POST request to reverse the payment amount.
 */
function processAuthReversal() {

    try {
        var apiClient = new CybersourceRestApi.ApiClient();
        var instance = new CybersourceRestApi.ReversalApi(apiClient);

        var clientReferenceInformation = new CybersourceRestApi.V2paymentsClientReferenceInformation();
        clientReferenceInformation.code = "TC50171_1";

        var amountDetails = new CybersourceRestApi.V2paymentsOrderInformationAmountDetails();
        amountDetails.totalAmount = "3000.00";

        var orderInformation = new CybersourceRestApi.V2paymentsOrderInformation();
        orderInformation.amountDetails = amountDetails;

        var reversalInformation = new CybersourceRestApi.V2paymentsidreversalsReversalInformation();
        var amountDetailsReversal = new CybersourceRestApi.V2paymentsidreversalsReversalInformationAmountDetails();
        amountDetailsReversal.totalAmount = "3000.00";

        var request = new CybersourceRestApi.AuthReversalRequest();
        request.clientReferenceInformation = clientReferenceInformation;
        request.orderInformation = orderInformation;
        request.reversalInformation = reversalInformation;

        var id = "5350191701826303503005";

        instance.authReversal(id, request, function (error, data, response) {
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
    processAuthReversal(function () {
        console.log('Method call complete.');
    });
}
module.exports.processAuthReversal = processAuthReversal;