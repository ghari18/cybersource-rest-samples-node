'use strict'

var CybersourceRestApi = require('CyberSource');

/**
 * Process an Authorization Reversal
 * Include the payment ID in the POST request to reverse the payment amount.
 */
    
function authReversal() {
   
    var apiClient = new CybersourceRestApi.ApiClient();
    var instance = new CybersourceRestApi.ReversalApi(apiClient);

    var clientReferenceInformation = new CybersourceRestApi.V2paymentsClientReferenceInformation();
    clientReferenceInformation.code = "TC50171_1";
   
    var orderInformation = new  CybersourceRestApi.V2paymentsidreversalsOrderInformation();
    var orderInformationAmountDetails = new CybersourceRestApi.V2paymentsOrderInformationAmountDetails();
    orderInformationAmountDetails.currency = "USD";
    orderInformation.amountDetails = reversalInformationAmountDetails;

    var reversalInformation = new CybersourceRestApi.V2paymentsidreversalsReversalInformation();
    var reversalInformationAmountDetails = new CybersourceRestApi.V2paymentsidreversalsReversalInformationAmountDetails();
    reversalInformationAmountDetails.totalAmount = "100.00";
    reversalInformation.amountDetails = reversalInformationAmountDetails;

    var request = new CybersourceRestApi.AuthReversalRequest();
    request.clientReferenceInformation = clientReferenceInformation;
    request.orderInformation = orderInformation;
    request.reversalInformation = reversalInformation;
    
    var id = "5347469347966551204003";

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

};
if (require.main === module) {
    authReversal(function () {
        console.log('getMethod call complete.');
    });
}
module.exports.authReversal = authReversal;