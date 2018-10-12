'use strict'

var CybersourceRestApi = require('CyberSource');
/**
 * This is a sample code to call CreditApi,
 * Process a Credit
 * POST to the credit resource to credit funds to a specified credit card.
 */
function standAloneCredit() {

    try {
        var apiClient = new CybersourceRestApi.ApiClient();
        var instance = new CybersourceRestApi.CreditApi(apiClient);

        var clientReferenceInformation = new CybersourceRestApi.V2paymentsClientReferenceInformation();
        clientReferenceInformation.code = "TC12345";

        var buyerInformation = new CybersourceRestApi.V2paymentsBuyerInformation();
        buyerInformation.merchantCustomerId = "123456abcd";

        var subMerchant = new CybersourceRestApi.V2paymentsAggregatorInformationSubMerchant();
        subMerchant.cardAcceptorId = "1234567890";
        subMerchant.name = "Visa Inc";
        subMerchant.address1 = "900 Metro Center";
        subMerchant.locality = "Foster City";
        subMerchant.administrativeArea = "CA";
        subMerchant.region = "PEN";
        subMerchant.postalCode = "94404-2775";
        subMerchant.country = "US";
        subMerchant.email = "test@cybs.com";
        subMerchant.phoneNumber = "650-432-0000";

        var aggregatorInformation = new CybersourceRestApi.V2paymentsAggregatorInformation();
        aggregatorInformation.subMerchant = subMerchant;
        aggregatorInformation.name = "V-Internatio";
        aggregatorInformation.aggregatorID = "123456789";

        var orderInformation = new CybersourceRestApi.V2paymentsOrderInformation();

        var amountDetails = new CybersourceRestApi.V2paymentsOrderInformationAmountDetails();
        amountDetails.totalAmount = "100";
        amountDetails.currency = "usd";
        amountDetails.exchangeRate = "0.5";
        amountDetails.exchangeRateTimeStamp = "2.01304E+13";

        orderInformation.amountDetails = amountDetails;

        var billTo = new CybersourceRestApi.V2paymentsOrderInformationBillTo();
        billTo.firstName = "John";
        billTo.lastName = "Test";
        billTo.company = "Visa";
        billTo.address1 = "testcredit";
        billTo.address2 = "test2credit";
        billTo.locality = "Ann Arbor";
        billTo.administrativeArea = "MI";
        billTo.postalCode = "48104-2201";
        billTo.country = "US";
        billTo.email = "test2@cybs.com";
        billTo.phoneNumber = "9999999";

        orderInformation.billTo = billTo;

        var invoice = new CybersourceRestApi.V2paymentsOrderInformationInvoiceDetails();
        invoice.purchaseOrderNumber = "CREDIT US";
        invoice.purchaseOrderDate = "20111231";

        orderInformation.invoiceDetails = invoice;

        var shippingDetails = new CybersourceRestApi.V2paymentsOrderInformationShippingDetails();
        shippingDetails.shipFromPostalCode = "47404";

        orderInformation.shippingDetails = shippingDetails;


        var paymentInformation = new CybersourceRestApi.V2paymentsPaymentInformation();

        var card = new CybersourceRestApi.V2paymentsPaymentInformationCard();
        card.number = "5555555555554444";
        card.expirationMonth = "12";
        card.expirationYear = "2031";
        card.type = "002";
        card.securityCode = "123";

        paymentInformation.card = card;

        var merchantInformation = new CybersourceRestApi.V2paymentsMerchantInformation();
        merchantInformation.categoryCode = "1234";

        var request = new CybersourceRestApi.CreateCreditRequest();
        request.clientReferenceInformation = clientReferenceInformation;
        request.buyerInformation = buyerInformation;
        request.aggregatorInformation = aggregatorInformation;
        request.orderInformation = orderInformation;
        request.paymentInformation = paymentInformation;
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
    } catch (error) {
        console.log(error);
    }
};
if (require.main === module) {
    standAloneCredit(function () {
        console.log('Method call complete.');
    });
}
module.exports.standAloneCredit = standAloneCredit;