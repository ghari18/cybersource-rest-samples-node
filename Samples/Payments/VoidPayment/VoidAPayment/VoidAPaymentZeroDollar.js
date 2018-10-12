'use strict'

var CybersourceRestApi = require('CyberSource');

function sampleCode() {

    var apiClient = new CybersourceRestApi.ApiClient();
    var instance = new CybersourceRestApi.VoidApi(apiClient);

    var clientReferenceInformation = new CybersourceRestApi.V2paymentsClientReferenceInformation();
    clientReferenceInformation.code = "1234567890";

    var pointOfSaleInformation = new CybersourceRestApi.V2paymentsPointOfSaleInformation();
    pointOfSaleInformation.cardPresent = "false";
    pointOfSaleInformation.catLevel = "6";
    pointOfSaleInformation.terminalCapability = "4";

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
    amountDetails.totalAmount = "0.00";
    amountDetails.currency = "USD";

    var orderInformation = new CybersourceRestApi.V2paymentsOrderInformation();
    orderInformation.billTo = billTo;
    orderInformation.amountDetails = amountDetails;

    var request = new CybersourceRestApi.VoidPaymentRequest();
    request.clientReferenceInformation = clientReferenceInformation;
    request.orderInformation = orderInformation;
    request.pointOfSaleInformation = pointOfSaleInformation;

    var id = "5347472870376842703005";

    instance.voidPayment(request, id, function (error, data, response) {
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