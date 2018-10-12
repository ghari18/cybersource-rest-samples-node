'use strict'

var CybersourceRestApi = require('CyberSource');
/**
 * This is a sample code to call RefundApi,
 * Include the capture ID in the POST request to refund the captured amount. 
 */
function refundACapture() {
    try {
        var request = new CybersourceRestApi.RefundCaptureRequest();
        var apiClient = new CybersourceRestApi.ApiClient();
        var instance = new CybersourceRestApi.RefundApi(apiClient);

        var clientReferenceInformation = new CybersourceRestApi.V2paymentsClientReferenceInformation();
        clientReferenceInformation.code = "Testing-VDP-Capture-Refund";
        request.clientReferenceInformation = clientReferenceInformation;
        var orderInformation = new CybersourceRestApi.V2paymentsidrefundsOrderInformation();
        var amountDetails = new CybersourceRestApi.V2paymentsOrderInformationAmountDetails();
        amountDetails.totalAmount = "102.21";
        amountDetails.currency = "USD";
        orderInformation.amountDetails = amountDetails;
        request.orderInformation = orderInformation;

        var id = "5336232827876732903529";
        instance.refundCapture(request, id, function (error, data, response) {
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
    refundACapture(function () {
        console.log('Method call complete.');
    });
}
module.exports.refundACapture = refundACapture;