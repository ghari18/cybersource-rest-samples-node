'use strict'

var CybersourceRestApi = require('CyberSource');

/**
 * This is a sample code to call PaymentApi,
 * createPayment method will create a new payment with merchantDescriptor
 */
function processMerchantDescriptorAuth() {

    try {
        var apiClient = new CybersourceRestApi.ApiClient();
        var instance = new CybersourceRestApi.PaymentApi(apiClient);

        var clientReferenceInformation = new CybersourceRestApi.V2paymentsClientReferenceInformation();
        clientReferenceInformation.code = "1234567890";

        var billTo = new CybersourceRestApi.V2paymentsOrderInformationBillTo();
        billTo.country = "SG";
        billTo.lastName = "Deo";
        billTo.address2 = "Desk M3-5573";
        billTo.address1 = "901 Metro Center Blvd";
        billTo.postalCode = "48104-2201";
        billTo.locality = "Ann Arbor";
        billTo.administrativeArea = "MI";
        billTo.firstName = "John";
        billTo.phoneNumber = "6504327113";
        billTo.district = "MI";
        billTo.buildingNumber = "123";
        billTo.company = "Visa";
        billTo.email = "test@cybs.com";

        var amountDetails = new CybersourceRestApi.V2paymentsOrderInformationAmountDetails();
        amountDetails.totalAmount = "72210";
        amountDetails.currency = "USD";

        var orderInformation = new CybersourceRestApi.V2paymentsOrderInformation();
        orderInformation.billTo = billTo;
        orderInformation.amountDetails = amountDetails;

        var paymentInformation = new CybersourceRestApi.V2paymentsPaymentInformation();
        var card = new CybersourceRestApi.V2paymentsPaymentInformationCard();
        card.expirationYear = "2031";
        card.number = "4111111111111111";
        card.securityCode = "123";
        card.expirationMonth = "12";
        paymentInformation.card = card;

        var merchantDescriptor = new CybersourceRestApi.V2paymentsMerchantInformationMerchantDescriptor();
        merchantDescriptor.name = "TestDescriptionInformation";
        merchantDescriptor.contact = "123-456-7890";

        var merchantInformation = new CybersourceRestApi.V2paymentsMerchantInformation();
        merchantInformation.merchantDescriptor = merchantDescriptor;

        var request = new CybersourceRestApi.CreatePaymentRequest();
        request.clientReferenceInformation = clientReferenceInformation;
        request.orderInformation = orderInformation;
        request.paymentInformation = paymentInformation;
        request.merchantInformation = merchantInformation;

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
    processMerchantDescriptorAuth(function () {
        console.log('getMethod call complete.');
    });
}
module.exports.processMerchantDescriptorAuth = processMerchantDescriptorAuth;