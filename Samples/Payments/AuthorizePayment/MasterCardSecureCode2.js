'use strict'

var CybersourceRestApi = require('CyberSource');

/**
 * This is a sample code to call PaymentApi,
 * createPayment method will create a new payment
 */
function processMasterCardSecureCode2() {

    try {
        var apiClient = new CybersourceRestApi.ApiClient();
        var instance = new CybersourceRestApi.PaymentApi(apiClient);

        var clientReferenceInformation = new CybersourceRestApi.V2paymentsClientReferenceInformation();
        clientReferenceInformation.code = "TC45561-10";

        var consumerAuthenticationInformation = new CybersourceRestApi.V2paymentsConsumerAuthenticationInformation();
        consumerAuthenticationInformation.ucafCollectionIndicator = "0";
        consumerAuthenticationInformation.cavv = "EHuWW9PiBkWvqE5juRwDzAUFBAk=";
        consumerAuthenticationInformation.eciRaw = "02";
        consumerAuthenticationInformation.ucafAuthenticationData = "lEmYpm61EduaVZjPG1/HsgkAAQc=";

        var processingInformation = new CybersourceRestApi.V2paymentsProcessingInformation();
        processingInformation.commerceIndicator = "spa";

        var billTo = new CybersourceRestApi.V2paymentsOrderInformationBillTo();
        billTo.country = "SG";
        billTo.lastName = "Deo";
        billTo.address2 = "Desk M3-5573";
        billTo.address1 = "901 Metro Center Blvd";
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
        card.number = "5641821111166669";
        card.securityCode = "123";
        card.expirationMonth = "12";
        card.type = "024";
        paymentInformation.card = card;

        var request = new CybersourceRestApi.CreatePaymentRequest();
        request.clientReferenceInformation = clientReferenceInformation;
        request.consumerAuthenticationInformation = consumerAuthenticationInformation;
        request.processingInformation = processingInformation;
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
    processMasterCardSecureCode2(function () {
        console.log('getMethod call complete.');
    });
}
module.exports.processMasterCardSecureCode2 = processMasterCardSecureCode2;