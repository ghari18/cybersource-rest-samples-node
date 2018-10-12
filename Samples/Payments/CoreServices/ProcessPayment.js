'use strict'

var CybersourceRestApi = require('CyberSource');

/**
 * This is a sample code to call PaymentApi,
 * createPayment method will create a new payment
 */
function processAPayment() {
    try {
        var apiClient = new CybersourceRestApi.ApiClient();
        var instance = new CybersourceRestApi.PaymentApi(apiClient);

        var clientReferenceInformation = new CybersourceRestApi.V2paymentsClientReferenceInformation();
        clientReferenceInformation.code = "TC50171_3";

        var processingInformation = new CybersourceRestApi.V2paymentsProcessingInformation();
        processingInformation.commerceIndicator = "internet";

        var subMerchant = new CybersourceRestApi.V2paymentsAggregatorInformationSubMerchant();
        subMerchant.cardAcceptorId = "1234567890";
        subMerchant.country = "US";
        subMerchant.phoneNumber = "650-432-0000";
        subMerchant.address1 = "900 Metro Center";
        subMerchant.postalCode = "94404-2775";
        subMerchant.locality = "Foster City";
        subMerchant.name = "Visa Inc";
        subMerchant.administrativeArea = "CA";
        subMerchant.region = "PEN";
        subMerchant.email = "test@cybs.com";

        var aggregatorInformation = new CybersourceRestApi.V2paymentsAggregatorInformation();
        aggregatorInformation.subMerchant = subMerchant;
        aggregatorInformation.name = "V-Internatio";
        aggregatorInformation.aggregatorId = "123456789";

        var amountDetails = new CybersourceRestApi.V2paymentsOrderInformationAmountDetails();
        amountDetails.totalAmount = "102.21";
        amountDetails.currency = "USD";

        var billTo = new CybersourceRestApi.V2paymentsOrderInformationBillTo();
        billTo.country = "US";
        billTo.firstName = "Test";
        billTo.lastName = "test";
        billTo.phoneNumber = "9999999999";
        billTo.address1 = "test";
        billTo.postalCode = "48104-2201";
        billTo.locality = "Ann Arbor";
        billTo.administrativeArea = "MI";
        billTo.email = "test@cybs.com";
        billTo.address2 = "Address 2";
        billTo.district = "MI";
        billTo.buildingNumber = "123";
        billTo.company = "Visa";

        var orderInformation = new CybersourceRestApi.V2paymentsOrderInformation();
        orderInformation.amountDetails = amountDetails;
        orderInformation.billTo = billTo;

        var paymentInformation = new CybersourceRestApi.V2paymentsPaymentInformation();
        var card = new CybersourceRestApi.V2paymentsPaymentInformationCard();
        card.expirationYear = "2031";
        card.number = "4111111111111111";
        card.expirationMonth = "03";
        card.securityCode = "123";
        card.type = "001";
        paymentInformation.card = card;

        var request = new CybersourceRestApi.CreatePaymentRequest();
        request.clientReferenceInformation = clientReferenceInformation;
        request.processingInformation = processingInformation;
        request.aggregatorInformation = aggregatorInformation;
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
    processAPayment(function () {
        console.log('Method call complete.');
    });
}
module.exports.processAPayment = processAPayment;