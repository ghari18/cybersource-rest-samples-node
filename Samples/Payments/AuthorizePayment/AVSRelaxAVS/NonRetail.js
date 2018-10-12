'use strict'

var CybersourceRestApi = require('CyberSource');

/**
 * This is a sample code to call PaymentApi,
 * createPayment method will create a new payment
 */
function processNonRetail() {

    try {
        var apiClient = new CybersourceRestApi.ApiClient();
        var instance = new CybersourceRestApi.PaymentApi(apiClient);

        var clientReferenceInformation = new CybersourceRestApi.V2paymentsClientReferenceInformation();
        clientReferenceInformation.code = "TC1102345";

        var deviceInformation = new CybersourceRestApi.V2paymentsDeviceInformation();
        deviceInformation.ipAddress = "66.185.179.2";
        deviceInformation.hostName = "cybersource.com";


        var authorizationOptions = new CybersourceRestApi.V2paymentsProcessingInformationAuthorizationOptions();
        authorizationOptions.ignoreAvsResult = "Y";
        authorizationOptions.ignoreCvResult = "N";

        var processingInformation = new CybersourceRestApi.V2paymentsProcessingInformation();
        processingInformation.authorizationOptions = authorizationOptions;

        var personalIdentification = new CybersourceRestApi.V2paymentsBuyerInformationPersonalIdentification();
        personalIdentification.id = "123* 4sÆ";

        var buyerInformation = new CybersourceRestApi.V2paymentsBuyerInformation();
        buyerInformation.personalIdentification = personalIdentification;

        var billTo = new CybersourceRestApi.V2paymentsOrderInformationBillTo();
        billTo.country = "US";
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
        amountDetails.totalAmount = "2401";
        amountDetails.currency = "usd";

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
    processNonRetail(function () {
        console.log('getMethod call complete.');
    });
}
module.exports.processNonRetail = processNonRetail;