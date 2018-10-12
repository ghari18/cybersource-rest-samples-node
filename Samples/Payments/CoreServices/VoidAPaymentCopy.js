'use strict'

var CybersourceRestApi = require('CyberSource');

/**
 * This is a sample code to call VoidApi,
 * Void a Payment
 * Include the payment ID in the POST request to cancel the payment.
 */
function voidAPaymentCopy() {

    try {
        var apiClient = new CybersourceRestApi.ApiClient();
        var instance = new CybersourceRestApi.VoidApi(apiClient);

        var clientReferenceInformation = new CybersourceRestApi.V2paymentsClientReferenceInformation();
        clientReferenceInformation.code = "1234567890";

        var pointOfSaleInformation = new CybersourceRestApi.V2paymentsPointOfSaleInformation();
        pointOfSaleInformation.cardPresent = "false";
        pointOfSaleInformation.catLevel = 6;
        pointOfSaleInformation.terminalCapability = 4;

        var orderInformation = new CybersourceRestApi.V2paymentsOrderInformation();
        var billTo = new CybersourceRestApi.V2paymentsOrderInformationBillTo();
        billTo.country = "US";
        billTo.lastName = "Deo";
        billTo.address1 = "901 Metro Center Blvd";
        billTo.postalCode = "40500";
        billTo.locality = "Foster City";
        billTo.administrativeArea = "CA";
        billTo.firstName = "John";
        billTo.email = "test@cybs.com";
        orderInformation.billTo = billTo;

        var amountInformation = new CybersourceRestApi.V2paymentsOrderInformationAmountDetails();
        amountInformation.totalAmount = 100.00;
        amountInformation.currency = "USD";
        orderInformation.amountDetails = amountInformation;

        var request = new CybersourceRestApi.VoidPaymentRequest();
        request.clientReferenceInformation = clientReferenceInformation;
        request.pointOfSaleInformation = pointOfSaleInformation;
        request.orderInformation = orderInformation;

        var voidID = "5388084151466000003001";

        instance.voidPayment(request, voidID, function (error, data, response) {
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
    voidAPaymentCopy(function () {
        console.log('Method call complete.');
    });
}
module.exports.voidAPaymentCopy = voidAPaymentCopy;