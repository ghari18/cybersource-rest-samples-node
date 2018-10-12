'use strict'

var CybersourceRestApi = require('CyberSource');
/**
 * This is a sample code to call CaptureApi,
 * to retrieve a capture details by id
 */
function retrieveCapture() {

    try {
        var apiClient = new CybersourceRestApi.ApiClient();
        var instance = new CybersourceRestApi.CaptureApi(apiClient);
        var id = "5289697403596987704107";
        instance.getCapture(id, function (error, data, response) {
            if (error) {
                console.log("Error : " + error)
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
    retrieveCapture(function () {
        console.log('Method call complete.');
    });
}
module.exports.retrieveCapture = retrieveCapture;