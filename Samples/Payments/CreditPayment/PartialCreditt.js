'use strict'

var CybersourceRestApi = require('CyberSource');


function sampleCode() {

    var apiClient = new CybersourceRestApi.ApiClient();
    var instance = new CybersourceRestApi.CreditApi(apiClient);

    var clientReferenceInformation = new CybersourceRestApi.V2paymentsClientReferenceInformation();
    clientReferenceInformation.code = "TC12345";

    var buyerInformation = new CybersourceRestApi.V2paymentsBuyerInformation();
    buyerInformation.merchantCustomerId = "123456abcd";

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

    var invoiceDetails = new CybersourceRestApi.V2paymentsOrderInformationInvoiceDetails();
    invoiceDetails.purchaseOrderDate = "20111231";
    invoiceDetails.purchaseOrderNumber = "CREDIT US";

    var shippingDetails = new CybersourceRestApi.V2paymentsOrderInformationShippingDetails();
    shippingDetails.shipFromPostalCode = "47404";

    var orderInformation = new CybersourceRestApi.V2paymentsOrderInformation();
    orderInformation.amountDetails = amountDetails;
    orderInformation.billTo = billTo;
    orderInformation.invoiceDetails = invoiceDetails;
    orderInformation.shippingDetails = shippingDetails;

    var merchantInformation = new CybersourceRestApi.V2paymentsMerchantInformation();
    merchantInformation.categoryCode ="1234";

    var paymentInformation = new CybersourceRestApi.V2paymentsPaymentInformation();
    var card = new CybersourceRestApi.V2paymentsPaymentInformationCard();
    card.expirationYear = "2031";
    card.number = "5555555555554444";
    card.expirationMonth = "03";
    card.type = "002";
    paymentInformation.card = card;

    var request = new CybersourceRestApi.CreateCreditRequest();
    request.clientReferenceInformation = clientReferenceInformation;
    request.orderInformation = orderInformation;
    request.paymentInformation = paymentInformation;
    request.buyerInformation = buyerInformation;
    request.merchantInformation = merchantInformation;
    
    instance.createCredit(request, function (error, data, response) {
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

};
if (require.main === module) {
    sampleCode(function () {
        console.log('getMethod call complete.');
    });
}
module.exports.sampleCode = sampleCode;