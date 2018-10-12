'use strict'

var CybersourceRestApi = require('CyberSource');
/**
 * This is a sample code to call VoidApi,
 * Void a Credit
 * Include the credit ID in the POST request to cancel the credit.
 */
function voidACredit() {

    try {
        var apiClient = new CybersourceRestApi.ApiClient();
        var instance = new CybersourceRestApi.VoidApi(apiClient);

        var clientReferenceInformation = new CybersourceRestApi.V2paymentsClientReferenceInformation();
        clientReferenceInformation.code = "test_void";

        var request = new CybersourceRestApi.VoidCreditRequest();
        request.clientReferenceInformation = clientReferenceInformation;

        var id = "5336232827876732903529";

        instance.voidCredit(request, id, function (error, data, response) {
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
    voidACredit(function () {
        console.log('Method call complete.');
    });
}
module.exports.voidACredit = voidACredit;