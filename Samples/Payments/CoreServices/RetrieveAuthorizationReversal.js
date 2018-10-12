'use strict'

var CybersourceRestApi = require('CyberSource');
/**
 * This is a sample code to call ReversalApi,
 * retrieve an authorization reversal details by id.
 */
function retrieveAuthorizationReversal() {
    try {
        var apiClient = new CybersourceRestApi.ApiClient();
        var instance = new CybersourceRestApi.ReversalApi(apiClient);
        var id = "5335485520876949203528";

        instance.getAuthReversal(id, function (error, data, response) {
            if (error) {
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
    retrieveAuthorizationReversal(function () {
        console.log('Method call complete.');
    });
}
module.exports.retrieveAuthorizationReversal = retrieveAuthorizationReversal;