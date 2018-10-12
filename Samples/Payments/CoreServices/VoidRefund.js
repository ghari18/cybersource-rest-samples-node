'use strict'

var CybersourceRestApi = require('CyberSource');

/**
 * This is a sample code to call VoidApi,
 * Void a Refund
 * Include the refund ID in the POST request to cancel the refund.
 */
function voidARefund() {

    try {
        var apiClient = new CybersourceRestApi.ApiClient();
        var instance = new CybersourceRestApi.VoidApi(apiClient);

        var clientReferenceInformation = new CybersourceRestApi.V2paymentsClientReferenceInformation();
        clientReferenceInformation.code = "test_void";

        var request = new CybersourceRestApi.VoidRefundRequest();
        request.clientReferenceInformation = clientReferenceInformation;

        var id = "5336232827876732903529";
        instance.voidRefund(request, id, function (error, data, response) {
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
    voidARefund(function () {
        console.log('Method call complete.');
    });
}
module.exports.voidARefund = voidARefund;