'use strict'

var CybersourceRestApi = require('CyberSource');

/**
 * This is a sample code to call PaymentApi,
 * for AVS US supported card type - Discover
 * createPayment method will create a new payment
 */
function processAvsUsSupportedDiscover() {

    try {
        var apiClient = new CybersourceRestApi.ApiClient();
        var instance = new CybersourceRestApi.PaymentApi(apiClient);

        var clientReferenceInformation = new CybersourceRestApi.V2paymentsClientReferenceInformation();
        clientReferenceInformation.code = "TC45561-10";

        var billTo = new CybersourceRestApi.V2paymentsOrderInformationBillTo();
        billTo.country = "SG";
        billTo.lastName = "Deo";
        billTo.address2 = "test";
        billTo.address1 = "201 S. Division St.";
        billTo.postalCode = "48104-2201";
        billTo.locality = "Ann Arbor";
        billTo.administrativeArea = "MI";
        billTo.firstName = "John";
        billTo.phoneNumber = "999999999";
        billTo.district = "MI";
        billTo.buildingNumber = "123";
        billTo.company = "Visa";
        billTo.email = "test@cybs.com";

        var amountDetails = new CybersourceRestApi.V2paymentsOrderInformationAmountDetails();
        amountDetails.totalAmount = "2016.05";
        amountDetails.currency = "USD";

        var orderInformation = new CybersourceRestApi.V2paymentsOrderInformation();
        orderInformation.billTo = billTo;
        orderInformation.amountDetails = amountDetails;

        var paymentInformation = new CybersourceRestApi.V2paymentsPaymentInformation();
        var card = new CybersourceRestApi.V2paymentsPaymentInformationCard();
        card.expirationYear = "2031";
        card.number = "6011111111111117";
        card.securityCode = "123";
        card.expirationMonth = "12";
        card.type = "004";
        paymentInformation.card = card;

        var request = new CybersourceRestApi.CreatePaymentRequest();
        request.clientReferenceInformation = clientReferenceInformation;
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
    processAvsUsSupportedDiscover(function () {
        console.log('getMethod call complete.');
    });
}
module.exports.processAvsUsSupportedDiscover = processAvsUsSupportedDiscover;