'use strict'

var CybersourceRestApi = require('CyberSource');

/**
 * This is a sample code to call CaptureApi,
 * call capturePayment method to process capture a payment
 */
function processCaptureAPayment() {
    try {
        var request = new CybersourceRestApi.CapturePaymentRequest();
        var apiClient = new CybersourceRestApi.ApiClient();
        var instance = new CybersourceRestApi.CaptureApi(apiClient);

        var clientReferenceInformation = new CybersourceRestApi.V2paymentsClientReferenceInformation();
        clientReferenceInformation.code = "TC50171_3";
        request.clientReferenceInformation = clientReferenceInformation;
        var orderInformation = new CybersourceRestApi.V2paymentsOrderInformation();
        var amountDetails = new CybersourceRestApi.V2paymentsOrderInformationAmountDetails();
        amountDetails.totalAmount = "102.21";
        amountDetails.currency = "USD";
        orderInformation.amountDetails = amountDetails;
        request.orderInformation = orderInformation;

        instance.capturePayment(request, "5336232827876732903529", function (error, data, response) {
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
    processCaptureAPayment(function () {
        console.log('Method call complete.');
    });
}
module.exports.processCaptureAPayment = processCaptureAPayment;