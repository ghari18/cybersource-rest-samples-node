'use strict'

var CybersourceRestApi = require('CyberSource');

/**
 * This is a sample code to call VoidApi,
 * Void a Payment
 * Include the payment ID in the POST request to cancel the payment.
 */
function voidAPayment() {

    try {
        var apiClient = new CybersourceRestApi.ApiClient();
        var instance = new CybersourceRestApi.VoidApi(apiClient);

        var clientReferenceInformation = new CybersourceRestApi.V2paymentsClientReferenceInformation();
        clientReferenceInformation.code = "TC50171_1";

        var request = new CybersourceRestApi.VoidPaymentRequest();
        request.clientReferenceInformation = clientReferenceInformation;

        var id = "5305395588436558001541";

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
    } catch (error) {
        console.log(error);
    }
};
if (require.main === module) {
    voidAPayment(function () {
        console.log('Method call complete.');
    });
}
module.exports.voidAPayment = voidAPayment;