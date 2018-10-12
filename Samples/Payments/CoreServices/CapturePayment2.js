'use strict'

var CybersourceRestApi = require('CyberSource');
/**
 * This is a sample code to call CaptureApi,
 * call capturePayment method to process capture a payment
 */
function processCapturePayment() {
    try {
        var apiClient = new CybersourceRestApi.ApiClient();
        var instance = new CybersourceRestApi.CaptureApi(apiClient);

        var clientReferenceInformation = new CybersourceRestApi.V2paymentsClientReferenceInformation();
        clientReferenceInformation.code = "1234567890";

        var pointOfSaleInformation = new CybersourceRestApi.V2paymentsPointOfSaleInformation();
        pointOfSaleInformation.cardPresent = "false";
        pointOfSaleInformation.catLevel = "6";
        pointOfSaleInformation.terminalCapability = "4";

        var orderInformation = new CybersourceRestApi.V2paymentsOrderInformation();

        var billTo = new CybersourceRestApi.V2paymentsOrderInformationBillTo();
        billTo.country = "US";
        billTo.firstName = "John";
        billTo.lastName = "Deo";
        billTo.address1 = "901 Metro Center Blvd";
        billTo.postalCode = "40500";
        billTo.locality = "Foster City";
        billTo.administrativeArea = "CA";
        billTo.email = "test@cybs.com";
        orderInformation.billTo = billTo;

        var amountDetails = new CybersourceRestApi.V2paymentsOrderInformationAmountDetails();
        amountDetails.totalAmount = "100.00";
        amountDetails.currency = "USD";
        orderInformation.amountDetails = amountDetails;

        var request = new CybersourceRestApi.CreatePaymentRequest();
        request.clientReferenceInformation = clientReferenceInformation;
        request.pointOfSaleInformation = pointOfSaleInformation;
        request.orderInformation = orderInformation;

        instance.capturePayment(request, "5388082762636796003004", function (error, data, response) {
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
    sampleCode(function () {
        console.log('getMethod call complete.');
    });
}
module.exports.sampleCode = sampleCode;