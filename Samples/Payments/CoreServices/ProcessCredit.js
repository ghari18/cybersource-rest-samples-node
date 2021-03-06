'use strict'

var path = require('path');
var filePath = path.resolve('Data/Configuration.js');
var Configuration = require(filePath);
var CybersourceRestApi = require('cybersource-rest-client');

/**
 * This is a sample code to call CreditApi,
 * call createCredit method to process a credit
 */
function processACredit(callback) {

    try {
        var configObject = new Configuration();
        var instance = new CybersourceRestApi.CreditApi(configObject);

        var clientReferenceInformation = new CybersourceRestApi.Ptsv2paymentsClientReferenceInformation();
        clientReferenceInformation.code = "test_credits";

        var orderInformation = new CybersourceRestApi.Ptsv2paymentsOrderInformation();
        var billtoInformation = new CybersourceRestApi.Ptsv2paymentsOrderInformationBillTo();
        billtoInformation.country = "US";
        billtoInformation.lastName = "Deo";
        billtoInformation.address1 = "201 S. Division St.";
        billtoInformation.postalCode = "94105";
        billtoInformation.locality = "San Francisco";
        billtoInformation.administrativeArea = "MI";
        billtoInformation.firstName = "John";
        billtoInformation.phoneNumber = "4158880000";
        billtoInformation.email = "test@cybs.com";
        orderInformation.billTo = billtoInformation;

        var amountInformation = new CybersourceRestApi.Ptsv2paymentsOrderInformationAmountDetails();
        amountInformation.totalAmount = "102.21";
        amountInformation.currency = "USD";
        orderInformation.amountDetails = amountInformation;

        var paymentInformation = new CybersourceRestApi.Ptsv2paymentsPaymentInformation();
        var cardInformation = new CybersourceRestApi.Ptsv2paymentsPaymentInformationCard();
        cardInformation.expirationYear = "2031";
        cardInformation.number = "5555555555554444";
        cardInformation.expirationMonth = "12";
        cardInformation.type = "002";
        paymentInformation.card = cardInformation;

        var request = new CybersourceRestApi.CreateCreditRequest();
        request.clientReferenceInformation = clientReferenceInformation;
        request.orderInformation = orderInformation;
        request.paymentInformation = paymentInformation;

        console.log("\n*************** Process Credit ********************* ");
        instance.createCredit(request, function (error, data, response) {
            if (error) {
                console.log("\nError in process a credit : " + error);
            }
            else if (data) {
                console.log("\nData of process a credit : " + JSON.stringify(data));
            }
            console.log("\nResponse of process a credit : " + JSON.stringify(response));
            console.log("\nResponse Code of process a credit : " + JSON.stringify(response['status']));
            callback(error, data);
        });
    } catch (error) {
        console.log(error);
    }
};
if (require.main === module) {
    processACredit(function () {
        console.log('Process Credit end.');
    });
}
module.exports.processACredit = processACredit;