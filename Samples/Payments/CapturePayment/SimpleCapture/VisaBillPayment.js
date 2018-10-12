'use strict'

var CybersourceRestApi = require('CyberSource');

function sampleCode() {
    
    var apiClient = new CybersourceRestApi.ApiClient();
    var instance = new CybersourceRestApi.CaptureApi(apiClient);

    var clientReferenceInformation = new CybersourceRestApi.V2paymentsClientReferenceInformation();
    clientReferenceInformation.code = "TC50171_3";
    
    var pointOfSaleInformation = new CybersourceRestApi.V2paymentsPointOfSaleInformation();
    pointOfSaleInformation.cardPresent = "false";
    pointOfSaleInformation.catLevel = "6";
    pointOfSaleInformation.terminalCapability = "4";

    var amountDetails = new CybersourceRestApi.V2paymentsOrderInformationAmountDetails();
    amountDetails.totalAmount = "10.21";
    amountDetails.currency = "USD";

    var billTo = new CybersourceRestApi.V2paymentsOrderInformationBillTo();
    billTo.country = "US";
    billTo.lastName = "Deo";
    billTo.address2 =  "Address 2";
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

    var orderInformation = new CybersourceRestApi.V2paymentsOrderInformation();
    orderInformation.amountDetails = amountDetails;
    orderInformation.billTo = billTo;
    
    var request = new CybersourceRestApi.CapturePaymentRequest();
    request.clientReferenceInformation = clientReferenceInformation;
    request.orderInformation = orderInformation;
    request.pointOfSaleInformation = pointOfSaleInformation;

    var id = "5347497805906794203003";
    
    instance.capturePayment(request, id, function (error, data, response) {
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