'use strict'

var CybersourceRestApi = require('CyberSource');

/**
 * This is a sample code to call PaymentApi,
 * createPayment method will create a new payment
 */
function processAltHaveQuestion() {

    try {
        var apiClient = new CybersourceRestApi.ApiClient();
        var instance = new CybersourceRestApi.PaymentApi(apiClient);

        var clientReferenceInformation = new CybersourceRestApi.V2paymentsClientReferenceInformation();
        clientReferenceInformation.code = "TC50171_1";

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
        amountDetails.currency = "USD";

        var orderInformation = new CybersourceRestApi.V2paymentsOrderInformation();
        orderInformation.billTo = billTo;
        orderInformation.amountDetails = amountDetails;

        var recipientInformation = new CybersourceRestApi.V2paymentsrecipientInformation();
        // no model fo recipientInfoCard
        // "recipientInformation" : {
        //     "card" : {
        //         "expirationYear" : "2031",
        //         "number" : "4111111111111111",
        //         "expirationMonth" : "12"
        //     }
        // },

        var reversalInformation = new CybersourceRestApi.V2paymentsidreversalsReversalInformation();
        var amountDetailsReversal = new CybersourceRestApi.V2paymentsidreversalsReversalInformationAmountDetails();
        amountDetailsReversal.totalAmount = "3000.00";

        var request = new CybersourceRestApi.CreatePaymentRequest();
        request.clientReferenceInformation = clientReferenceInformation;
        request.orderInformation = orderInformation;
        //request.recipientInformation = recipientInformation;
        request.reversalInformation = reversalInformation;


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
    processAltHaveQuestion(function () {
        console.log('getMethod call complete.');
    });
}
module.exports.processAltHaveQuestion = processAltHaveQuestion;