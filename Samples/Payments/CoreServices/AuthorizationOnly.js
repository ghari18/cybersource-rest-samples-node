'use strict'

var CybersourceRestApi = require('CyberSource');

/**
 * This is a sample code to call PaymentApi,
 * createPayment method will create a new payment
 */
function processAuthorizationOnly() {

    try {
        var apiClient = new CybersourceRestApi.ApiClient();
        var instance = new CybersourceRestApi.PaymentApi(apiClient);

        var clientReferenceInformation = new CybersourceRestApi.V2paymentsClientReferenceInformation();
        clientReferenceInformation.code = "1234567890";

        var pointOfSaleInformation = new CybersourceRestApi.V2paymentsPointOfSaleInformation();
        pointOfSaleInformation.cardPresent = "false";
        pointOfSaleInformation.catLevel = "6";
        pointOfSaleInformation.terminalCapability = "4";

        var amountDetails = new CybersourceRestApi.V2paymentsOrderInformationAmountDetails();
        amountDetails.totalAmount = "100.00";
        amountDetails.currency = "USD";

        var billTo = new CybersourceRestApi.V2paymentsOrderInformationBillTo();
        billTo.firstName = "John";
        billTo.lastName = "Deo";
        billTo.address1 = "901 Metro Center Blvd";
        billTo.locality = "Foster City";
        billTo.administrativeArea = "CA";
        billTo.postalCode = "40500";
        billTo.country = "US";
        billTo.email = "test@cybs.com";

        var orderInformation = new CybersourceRestApi.V2paymentsOrderInformation();
        orderInformation.amountDetails = amountDetails;
        orderInformation.billTo = billTo;

        var paymentInformation = new CybersourceRestApi.V2paymentsPaymentInformation();
        var card = new CybersourceRestApi.V2paymentsPaymentInformationCard();
        card.number = "4111111111111111";
        card.expirationMonth = "12";
        card.expirationYear = "2031";
        card.securityCode = "123";

        paymentInformation.card = card;

        var request = new CybersourceRestApi.CreatePaymentRequest();
        request.clientReferenceInformation = clientReferenceInformation;
        request.pointOfSaleInformation = pointOfSaleInformation;
        request.orderInformation = orderInformation;
        request.paymentInformation = paymentInformation;

        instance.createPayment(request, function (error, data, response) {
            if (error) {
                console.log("Error : " + error);
                console.log("Error : " + error.stack);
                console.log("Error status code : " + error.statusCode);
            }
            else if (data) {
                console.log("Data : " + JSON.stringify(data));
            }
            console.log("Response : " + JSON.stringify(response));
            console.log("Response id : " + response[text.id]);

        });

    } catch (error) {
        console.log(error);
    }
};
if (require.main === module) {
    processAuthorizationOnly(function () {
        console.log('getMethod call complete.');
    });
}
module.exports.processAuthorizationOnly = processAuthorizationOnly;