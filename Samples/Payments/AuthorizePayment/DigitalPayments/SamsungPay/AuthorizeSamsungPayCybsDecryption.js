'use strict'

var CybersourceRestApi = require('CyberSource');

/**
 * This is a sample code to call PaymentApi,
 * createPayment method will create a new payment
 */
function processAuthorizeSamsungPayCybsDecryption() {

    try {
        var apiClient = new CybersourceRestApi.ApiClient();
        var instance = new CybersourceRestApi.PaymentApi(apiClient);

        var clientReferenceInformation = new CybersourceRestApi.V2paymentsClientReferenceInformation();
        clientReferenceInformation.code = "TC_MPOS_Paymentech_3";

        var processingInformation = new CybersourceRestApi.V2paymentsProcessingInformation();
        processingInformation.paymentSolution = "008";
        processingInformation.commerceIndicator = "vbv";

        var billTo = new CybersourceRestApi.V2paymentsOrderInformationBillTo();
        billTo.country = "US";
        billTo.lastName = "Test";
        billTo.address1 = "201 S. Division St.";
        billTo.postalCode = "48104-2201";
        billTo.firstName = "CYBS";

        var amountDetails = new CybersourceRestApi.V2paymentsOrderInformationAmountDetails();
        amountDetails.totalAmount = "100.00";
        amountDetails.currency = "USD";

        var orderInformation = new CybersourceRestApi.V2paymentsOrderInformation();
        orderInformation.billTo = billTo;
        orderInformation.amountDetails = amountDetails;

        var paymentInformation = new CybersourceRestApi.V2paymentsPaymentInformation();
        var fluidData = new CybersourceRestApi.V2paymentsPaymentInformationFluidData();
        fluidData.value = "ewoJInB1YmxpY0tleUhhc2giOiAiaTRYell5MFRnNnkvaEUwV2RrK0dwOHV4aml4U3I0US91MUxNOVd0VTl2az0iLAoJInZlcnNpb24iOiAiMTAwIiwKCSJkYXRhIjogIlpYZHZTa2x0Um5OYWVVazJTVU5LVTFVd1JYaFllbFZwVEVGdlNrbHRWblZaZVVrMlNVTktRazFxVlRKU01FNU9TV2wzUzBOVFNuSmhWMUZwVDJsQmFXRlVVbGxsYkd3MVRVWlNiazV1YTNaaFJWVjNWakpTY2tzd1pIZFBTRlkwWVcxc05GVXpTVEJWVXpreFRWVjRUazlXWkRCV1ZHd3lZWG93YVV4QmIwcEpibEkxWTBOSk5rbERTa3RVTVU1R1NXbDNTME5UU21waFIwWjFZbTFXYzFVeVZtcGtXRXB3WkVoc1JHSXlOVEJhV0dnd1NXcHZaMGxzU2xSUlZqbFJVekJyYVVOdU1DNUdURGxEYTJScFFtOHlTSEExWDJ0Qk5WOUJNM2hJUjFCaFQwZDBSMmRWVVRoWk5UY3dNVjlzUmxSU1IxbFlNRWRpYlV4d05GVnBhM1JSV1Voa09FaHZUR3RrVVUxRFUwVjJNRGhXU0daZlJVUmtSaloyTW5rMmJURkJSRmhCWjAxeE9FaHlNVjlOT1daalpXWXhTMGgzVmpCVlNYSlRlRWN4TUZneVUwMTJVa2xmTURKcU9FVjJVV2gyZWt4dVMzRXhiRWgxTUUxMmVEZHdhV1IzYkU4NVJVdG5iRmRTY2tGTlh5MVlRMmczVW1WaE4wWmxaVU16VW00d1dqQnRUMFpZVEhaUVdESkxlWEJ5ZDFCemFHOWpZemxhTW5rNFJYVmlSVzVaT1Zka1pqazJNRUZtVTJwTGIyOHRXRlphVGxoNk5WVlZiSFZoWW5WdVlrRkNlSEJ1VWpsTlMzZzRaMnhoWjBwT1RHcFdOMjB4YzFCT1RrMVBaa1YzT1hoU1V6RjBkWE5sV2sxNFdURnRiRFJDVVVSb1IwWTROa1ZXU0hkUmFXbGpWRGhDYmxkVVVFRlBZVk5uWVVwWk1tVndjMTluVDI5aVptY3VZazFaZVdKSE5EVlFRblJNVG14TVUxOUxiRzVOUVM1Mk1tUmZkVmN5T0c5T1JqUnVUV2xPWTBOeVdWSktlSEJ6YlhJd09XZHRiM0ZSUkZkVk5FRldTMFJ6Wm5VNVltdENTRVJuTnpGclNHaGtNMDV6UTJselpXSmlia2swWVUxWE1sTkxNV054UzNCWVgwaFBNRGswU0hoeVZHeEtUV3gwY21kS2VIWjJMWGd4VVU5eVlXNUNTMnRxY0hsNlpVcDNabWRXWXkxblJ6SktPV2d4U25jMFdIRm1Nbk5ZZFZwbWQzSnJSM0pZTjAxcWFXTnRhVWxuZERGU1lURjZkRGRUYUVvemRucFlSRm81V2paTFUyaDFZWEF6TkZFd05VcERaRUpVTUhseFdqZHVaM2hwWjJ4c2EzbDFWazFRWXpkbWRpMUJkMWhzYkRoc2FtUm9la3BsYmxKdFR6ZEhVRnBtY0dsRlVUWkNTVjl2WWpWTmJERllTRlZHWXpSUFRXZG5TR3hOUW0xWFRqWkxhVVJFUldsUlIyaERaVlZpWW01MmJXTXVMVlZhVUVoME4zUkVPVGRmWVdONFgyRk5SakptUVE9PSIKfQ==";
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
    processAuthorizeSamsungPayCybsDecryption(function () {
        console.log('getMethod call complete.');
    });
}
module.exports.processAuthorizeSamsungPayCybsDecryption = processAuthorizeSamsungPayCybsDecryption;