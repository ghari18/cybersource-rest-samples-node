'use strict'

var CybersourceRestApi = require('CyberSource');

/**
 * This is a sample code to run PaymentAPI createPayment with visa cvv2 card.
 */

function processVisaCVV2() {
    try {
        var apiClient = new CybersourceRestApi.ApiClient();
        var instance = new CybersourceRestApi.PaymentApi(apiClient);

        var clientReferenceInformation = new CybersourceRestApi.V2paymentsClientReferenceInformation();
        clientReferenceInformation.code = "TC1102345";

        var deviceInformation = new CybersourceRestApi.V2paymentsDeviceInformation();
        deviceInformation.hostName = "cybersource.com";
        deviceInformation.ipAddress = "66.185.179.2";

        var processingInformation = new CybersourceRestApi.V2paymentsProcessingInformation();
        var authorizationOptions = new CybersourceRestApi.V2paymentsProcessingInformationAuthorizationOptions();
        authorizationOptions.ignoreAvsResult = "Y";
        authorizationOptions.ignoreCvsResult = "N";

        processingInformation.authorizationOptions = authorizationOptions;

        var buyerInformation = new CybersourceRestApi.V2paymentsBuyerInformation();
        buyerInformation.personalIdentification = [{ "id": "123* 4sÆ" }];

        var billTo = new CybersourceRestApi.V2paymentsOrderInformationBillTo();
        billTo.country = "US";
        billTo.firstName = "John";
        billTo.lastName = "Deo";
        billTo.phoneNumber = "6504327113";
        billTo.address1 = "901 Metro Center Blvd";
        billTo.postalCode = "94404";
        billTo.locality = "Foster City";
        billTo.administrativeArea = "CA";
        billTo.email = "test@cybs.com";

        var amountDetails = new CybersourceRestApi.V2paymentsOrderInformationAmountDetails();
        amountDetails.totalAmount = "2719";
        amountDetails.currency = "USD";

        var orderInformation = new CybersourceRestApi.V2paymentsOrderInformation();
        orderInformation.billTo = billTo;
        orderInformation.amountDetails = amountDetails;

        var paymentInformation = new CybersourceRestApi.V2paymentsPaymentInformation();
        var card = new CybersourceRestApi.V2paymentsPaymentInformationCard();
        card.expirationYear = "2031";
        card.number = "372425119311008";
        card.securityCode = "1111";
        card.expirationMonth = "12";
        card.type = "003";
        card.securityCodeIndicator = "1";

        paymentInformation.card = card;

        var request = new CybersourceRestApi.CreatePaymentRequest();
        request.clientReferenceInformation = clientReferenceInformation;
        request.deviceInformation = deviceInformation;
        request.processingInformation = processingInformation;
        request.buyerInformation = buyerInformation;
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

        });
    } catch (error) {
        console.log(error);
    }
};
if (require.main === module) {
    processVisaCVV2(function () {
        console.log('Method call complete.');
    });
}
module.exports.processVisaCVV2 = processVisaCVV2;