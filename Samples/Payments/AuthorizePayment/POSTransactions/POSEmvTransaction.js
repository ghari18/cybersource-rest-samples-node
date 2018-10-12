'use strict'

var CybersourceRestApi = require('CyberSource');

/**
 * This is a sample code to call PaymentApi,
 * createPayment method will create a new payment
 */
function processPOSEmvTransaction() {

    try {
        var apiClient = new CybersourceRestApi.ApiClient();
        var instance = new CybersourceRestApi.PaymentApi(apiClient);

        var clientReferenceInformation = new CybersourceRestApi.V2paymentsClientReferenceInformation();
        clientReferenceInformation.code = "123456";

        var pointOfSaleInformation = new CybersourceRestApi.V2paymentsPointOfSaleInformation();
        pointOfSaleInformation.cardPresent = "Y";
        pointOfSaleInformation.catLevel = "2";
        var emv = new CybersourceRestApi.V2paymentsPointOfSaleInformationEmv();
        emv.fallbackCondition = "swiped";
        emv.fallback = "Y";
        pointOfSaleInformation.emv = emv;
        pointOfSaleInformation.terminalCapability = "4";

        var billTo = new CybersourceRestApi.V2paymentsOrderInformationBillTo();
        billTo.country = "US";
        billTo.lastName = "Deo";
        billTo.address1 = "201 S. Division St.";
        billTo.postalCode = "48104-2201";
        billTo.locality = "Ann Arbor";
        billTo.administrativeArea = "MI";
        billTo.firstName = "John";
        billTo.phoneNumber = "999999999";
        billTo.email = "test@cybs.com";

        var amountDetails = new CybersourceRestApi.V2paymentsOrderInformationAmountDetails();
        amountDetails.totalAmount = "100.00";
        amountDetails.currency = "usd";


        var orderInformation = new CybersourceRestApi.V2paymentsOrderInformation();
        orderInformation.billTo = billTo;
        orderInformation.amountDetails = amountDetails;

        var paymentInformation = new CybersourceRestApi.V2paymentsPaymentInformation();
        var card = new CybersourceRestApi.V2paymentsPaymentInformationCard();
        card.expirationYear = "2031";
        card.number = "372425119311008";
        card.securityCode = "123";
        card.expirationMonth = "12";
        var fluidData = new CybersourceRestApi.V2paymentsPaymentInformationFluidData();
        fluidData.value = "%B373235387881007^SMITH/JOHN         ^31121019761100      00868000000?;373235387881007=31121019761186800000?"
        paymentInformation.card = card;
        paymentInformation.fluidData = fluidData;

        var request = new CybersourceRestApi.CreatePaymentRequest();
        request.clientReferenceInformation = clientReferenceInformation;
        request.pointOfSaleInformation = pointOfSaleInformation;
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
    processPOSEmvTransaction(function () {
        console.log('getMethod call complete.');
    });
}
module.exports.processPOSEmvTransaction = processPOSEmvTransaction;