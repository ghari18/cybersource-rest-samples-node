'use strict'

var CybersourceRestApi = require('CyberSource');

/**
 * This is a sample code to call PaymentApi,
 * createPayment method will create a new payment
 */
function processAuthorizeAndroidPayCybsDecryption() {

    try {
        var apiClient = new CybersourceRestApi.ApiClient();
        var instance = new CybersourceRestApi.PaymentApi(apiClient);

        var clientReferenceInformation = new CybersourceRestApi.V2paymentsClientReferenceInformation();
        clientReferenceInformation.code = "TC_MPOS_Paymentech_1";

        var processingInformation = new CybersourceRestApi.V2paymentsProcessingInformation();
        processingInformation.paymentSolution = "006";

        var billTo = new CybersourceRestApi.V2paymentsOrderInformationBillTo();
        billTo.country = "US";
        billTo.lastName = "Test";
        billTo.address1 = "201 S. Division St.";
        billTo.postalCode = "48104-2201";
        billTo.firstName = "John";

        var amountDetails = new CybersourceRestApi.V2paymentsOrderInformationAmountDetails();
        amountDetails.totalAmount = "115.00";
        amountDetails.currency = "USD";

        var orderInformation = new CybersourceRestApi.V2paymentsOrderInformation();
        orderInformation.billTo = billTo;
        orderInformation.amountDetails = amountDetails;

        var paymentInformation = new CybersourceRestApi.V2paymentsPaymentInformation();
        var fluidData = new CybersourceRestApi.V2paymentsPaymentInformationFluidData();
        fluidData.value = "ewoJInB1YmxpY0tleUhhc2giICAgIDogIlNKU1NSN0Q4VHZxbHBPWmcwMFhWY1pYclI1czJBUTJxYU8rK0VTVnl4clU9IiwKCSJ2ZXJzaW9uIjogIjEuMCIsCgkiZGF0YSIgOiAiZXdvSkltVnVZM0o1Y0hSbFpFMWxjM05oWjJVaU9pQWlSbFZrUjNWQlFWVlpRVWd2VXpreU1rczNXVE5QTm5VclpsWXJlbU5wUjBwamN6SkRPVVJ1Ykd0TlYyZzJZa2hVS3pCd2FsTTJjbkZJTDFoTWVYcGlSVTg1WWtsdkwyUmtUbTEzYVRGblRqbEVZV1Y2Y3pOdlpFNXVValZ0Ykd4MlIzWktNRVpYU0ZKeVRTOVRabVF6TlRZeVlqaFNObFpST1ZwS1ZUTmFNMXBDT0ZSWmFtdGpiWGhVTHpkSWQwaHdVWGgxUmpaT2JXZHNWMmwwVnk5VU0ya3dSVE5QV1dwUkswZGtWbTFZTVVOaVoxbHNlWHBRTVVOSWFrNXdUV3RxVUhvMGVrTlVibUpHTmxGc1pIWkxaVFJvYkhselpuZ3pPVzlwVEU5YVIxcG9SSGhVVDNwU2VXUXhWekl6VVQwOUlpd0tDU0psY0dobGJXVnlZV3hRZFdKc2FXTkxaWGtpT2lBaVRVWnJkMFYzV1VoTGIxcEplbW93UTBGUldVbExiMXBKZW1vd1JFRlJZMFJSWjBGRmJ6RnlUMnBGU2t4SUsxWk1VRGQwUkV4YVdHSnBia2xaWWtjeVYwOXZjMDlDZWs5TVMyVkRiMU5ZVm1KSk9XNTBjWFpHT1dKelRtRlhOWEJYUkRsbFdsUXZXSHBHZURoTGIwdEROVmhOYVRSblZXWkdRMUU5UFNJc0Nna2lkR0ZuSWpvZ0lrVkRkRFZwVW1kM1VscGxMM2hJWlRCSU1rMXJhRUpGTXpSM1dYVXllVFJKZG13ME5uUjRXSFlyVjFFOUlncDkiCn0=";
        paymentInformation.fluidData = fluidData;

        var request = new CybersourceRestApi.CreatePaymentRequest();
        request.clientReferenceInformation = clientReferenceInformation;
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
    processAuthorizeAndroidPayCybsDecryption(function () {
        console.log('getMethod call complete.');
    });
}
module.exports.processAuthorizeAndroidPayCybsDecryption = processAuthorizeAndroidPayCybsDecryption;