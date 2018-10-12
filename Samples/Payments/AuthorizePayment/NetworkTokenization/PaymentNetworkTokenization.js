'use strict'

var CybersourceRestApi = require('CyberSource');

/**
 * This is a sample code to call PaymentApi,
 * createPayment method will create a new payment
 */
function processPaymentNetworkTokenization() {

    try {
        var apiClient = new CybersourceRestApi.ApiClient();
        var instance = new CybersourceRestApi.PaymentApi(apiClient);

        var clientReferenceInformation = new CybersourceRestApi.V2paymentsClientReferenceInformation();
        clientReferenceInformation.code = "TC_MPOS_Paymentech_3";

        var processingInformation = new CybersourceRestApi.V2paymentsProcessingInformation();
        processingInformation.commerceIndicator = "internet";

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
        amountDetails.totalAmount = "100";
        amountDetails.currency = "USD";


        var orderInformation = new CybersourceRestApi.V2paymentsOrderInformation();
        orderInformation.billTo = billTo;
        orderInformation.amountDetails = amountDetails;

        var paymentInformation = new CybersourceRestApi.V2paymentsPaymentInformation();
        var tokenizedCard = new CybersourceRestApi.V2paymentsPaymentInformationTokenizedCard();
        tokenizedCard.expirationYear = "2031";
        tokenizedCard.number = "4111111111111111";
        tokenizedCard.expirationMonth = "12";
        tokenizedCard.transactionType = "1";
        paymentInformation.tokenizedCard = tokenizedCard;

        var consumerAuthenticationInformation = new CybersourceRestApi.V2paymentsConsumerAuthenticationInformation();
        consumerAuthenticationInformation.cavv = "AAABCSIIAAAAAAACcwgAEMCoNh+="
        consumerAuthenticationInformation.xid = "T1Y0OVcxMVJJdkI0WFlBcXptUzE="


        var request = new CybersourceRestApi.CreatePaymentRequest();
        request.clientReferenceInformation = clientReferenceInformation;
        request.processingInformation = processingInformation;
        request.orderInformation = orderInformation;
        request.paymentInformation = paymentInformation;
        request.consumerAuthenticationInformation = consumerAuthenticationInformation;

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
    processPaymentNetworkTokenization(function () {
        console.log('getMethod call complete.');
    });
}
module.exports.processPaymentNetworkTokenization = processPaymentNetworkTokenization;