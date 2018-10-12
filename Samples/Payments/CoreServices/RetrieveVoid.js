'use strict'

var CybersourceRestApi = require('CyberSource');

/**
 * This is a sample code to call VoidApi,
 * to retrieve a void details by id
 */
function retrieveAVoid() {

    try {
        var apiClient = new CybersourceRestApi.ApiClient();
        var instance = new CybersourceRestApi.VoidApi(apiClient);
        var id = "5335528892726038303523";

        instance.getVoid(id, function (error, data, response) {
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
    retrieveAVoid(function () {
        console.log('Method call complete.');
    });
}
module.exports.retrieveAVoid = retrieveAVoid;