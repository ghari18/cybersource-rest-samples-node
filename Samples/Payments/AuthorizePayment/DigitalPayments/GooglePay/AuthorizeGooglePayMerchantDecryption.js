'use strict'

var CybersourceRestApi = require('CyberSource');

/**
 * This is a sample code to call PaymentApi,
 * createPayment method will create a new payment
 */
function processAuthorizeGooglePayMerchantDecryption() {

    try {
        var apiClient = new CybersourceRestApi.ApiClient();
        var instance = new CybersourceRestApi.PaymentApi(apiClient);

        var clientReferenceInformation = new CybersourceRestApi.V2paymentsClientReferenceInformation();
        clientReferenceInformation.code = "mpos_paymentech";

        var processingInformation = new CybersourceRestApi.V2paymentsProcessingInformation();
        processingInformation.paymentSolution = "012";

        var billTo = new CybersourceRestApi.V2paymentsOrderInformationBillTo();
        billTo.country = "US";
        billTo.lastName = "Deo";
        billTo.address2 = "Address 2";
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
        amountDetails.totalAmount = "115.00";
        amountDetails.currency = "USD";

        var orderInformation = new CybersourceRestApi.V2paymentsOrderInformation();
        orderInformation.billTo = billTo;
        orderInformation.amountDetails = amountDetails;

        var tokenizedCard = new CybersourceRestApi.V2paymentsPaymentInformationTokenizedCard();
        tokenizedCard.expirationYear = "2020";
        tokenizedCard.number = "4111111111111111";
        tokenizedCard.expirationMonth = "12";
        tokenizedCard.transactionType = "1";
        tokenizedCard.cryptogram = "EHuWW9PiBkWvqE5juRwDzAUFBAk=";

        var paymentInformation = new CybersourceRestApi.V2paymentsPaymentInformation();
        paymentInformation.tokenizedCard = tokenizedCard;

        var request = new CybersourceRestApi.CreatePaymentRequest();
        request.clientReferenceInformation = clientReferenceInformation;
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
    processAuthorizeGooglePayMerchantDecryption(function () {
        console.log('getMethod call complete.');
    });
}
module.exports.processAuthorizeGooglePayMerchantDecryption = processAuthorizeGooglePayMerchantDecryption;