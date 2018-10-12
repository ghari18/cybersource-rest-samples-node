'use strict'

var CybersourceRestApi = require('CyberSource');

/**
 * This is a sample code to call CreditApi,
 * call createCredit method to process a credit
 */
function processACredit() {

try{
    var apiClient = new CybersourceRestApi.ApiClient();
    var instance = new CybersourceRestApi.CreditApi(apiClient);

    clientReferenceInformation = new CybersourceRestApi.V2paymentsClientReferenceInformation();
    clientReferenceInformation.code = "12345678";
    
    orderInformation = new CybersourceRestApi.V2paymentsOrderInformation();
    billtoInformation = new CybersourceRestApi.V2paymentsOrderInformationBillTo();
    billtoInformation.country = "US";
    billtoInformation.lastName = "Deo";
    billtoInformation.address1 = "201 S. Division St.";
    billtoInformation.postalCode = "48104-2201";
    billtoInformation.locality = "Ann Arbor";
    billtoInformation.administrative_area = "MI";
    billtoInformation.firstName = "John";
    billtoInformation.phoneNumber = "999999999";
    billtoInformation.email = "test@cybs.com";
    orderInformation.billTo = billtoInformation;
   
    amountInformation = new CybersourceRestApi.V2paymentsOrderInformationAmountDetails();
    amountInformation.totalAmount = "102.21";
    amountInformation.currency = "USD";
    orderInformation.amountDetails = amountInformation;

    paymentInformation = new CybersourceRestApi.V2paymentsPaymentInformation();
    cardInformation = new CybersourceRestApi.V2paymentsPaymentInformationCard();
    cardInformation.expirationYear = "2031";
    cardInformation.number = "5555555555554444";
    cardInformation.expirationMonth = "12";
    cardInformation.type = "002";
    paymentInformation.card = cardInformation;
    
	var request = new CybersourceRestApi.CreateCreditRequest();
    request.clientReferenceInformation = clientReferenceInformation;
    request.orderInformation = orderInformation;
    request.paymentInformation = paymentInformation;

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
}catch(error){
    console.log(error);
}
};
if (require.main === module) {
    processACredit(function () {
        console.log('getMethod call complete.');
    });
}
module.exports.processACredit = processACredit;