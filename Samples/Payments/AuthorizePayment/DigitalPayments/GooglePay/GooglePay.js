'use strict'

var CybersourceRestApi = require('CyberSource');

/**
 * This is a sample code to call PaymentApi,
 * createPayment method will create a new payment
 */
function processGooglePay() {

    try {
        var apiClient = new CybersourceRestApi.ApiClient();
        var instance = new CybersourceRestApi.PaymentApi(apiClient);

        var clientReferenceInformation = new CybersourceRestApi.V2paymentsClientReferenceInformation();
        clientReferenceInformation.code = "TC_MPOS_Paymentech_3";

        var evm = new CybersourceRestApi.V2paymentsPointOfSaleInformationEmv();
        evm.cardSequenceNumber = "123";
        evm.tags = "9C01019A031207109F33036040209F1A0207849F370482766E409F3602001F82025C009F2608EF7753429A5D16B19F100706010A03A00000950580000400009F02060000000700009F6E0482766E409F5B04123456789F2701809F3403AB12349F0902AB129F4104AB1234AB9F0702AB129F0610123456789012345678901234567890AB9F030200005F2A0207849F7C031234569F350123";

        var pointOfSaleInformation = new CybersourceRestApi.V2paymentsPointOfSaleInformation();
        pointOfSaleInformation.terminalId = "terminal";
        pointOfSaleInformation.cardPresent = "Y";
        pointOfSaleInformation.entryMode = "QRCode";
        pointOfSaleInformation.terminalCapability = "4";
        pointOfSaleInformation.evm = evm;

        var processingInformation = new CybersourceRestApi.V2paymentsProcessingInformation();
        processingInformation.commerceIndicator = "retail";
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
        tokenizedCard.transactionType = "1";
        tokenizedCard.requestorId = "12345678901";

        var card = new CybersourceRestApi.V2paymentsPaymentInformationCard();
        card.type = "001",
            card.trackData = ";4111111111111111=21121019761186800000?";

        var paymentInformation = new CybersourceRestApi.V2paymentsPaymentInformation();
        paymentInformation.tokenizedCard = tokenizedCard;
        paymentInformation.card = card;

        var request = new CybersourceRestApi.CreatePaymentRequest();
        request.clientReferenceInformation = clientReferenceInformation;
        request.pointOfSaleInformation = pointOfSaleInformation;
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
    processGooglePay(function () {
        console.log('getMethod call complete.');
    });
}
module.exports.processGooglePay = processGooglePay;