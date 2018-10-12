'use strict'

var CybersourceRestApi = require('CyberSource');

function sampleCode() {
   
    var apiClient = new CybersourceRestApi.ApiClient();
    var instance = new CybersourceRestApi.RefundApi(apiClient);

    var clientReferenceInformation = new CybersourceRestApi.V2paymentsClientReferenceInformation();
    clientReferenceInformation.code = "Testing-VDP-Payments-Refund";
 
    var orderInformation = new CybersourceRestApi.V2paymentsidrefundsOrderInformation();
    var amountDetails = new CybersourceRestApi.V2paymentsOrderInformationAmountDetails();
    amountDetails.totalAmount = "102.21";
    amountDetails.currency = "USD";
    orderInformation.amountDetails = amountDetails;

    var request = new CybersourceRestApi.RefundPaymentRequest();
    request.clientReferenceInformation = clientReferenceInformation;
    request.orderInformation = orderInformation;

    var id = "5336232827876732903529";

    instance.refundPayment(request, id, function (error, data, response) {
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
    sampleCode(function () {
        console.log('getMethod call complete.');
    });
}
module.exports.sampleCode = sampleCode;