'use strict'

var CybersourceRestApi = require('CyberSource');

/**
 * This is a sample code to call ReportSubscriptionsApi,
 * retrive report subscription .. visa wiki sample
 */
function sampleCode() {

    var apiClient = new CybersourceRestApi.ApiClient();
    var instance = new CybersourceRestApi.ReportSubscriptionsApi(apiClient);

    instance.getAllSubscriptions(function (error, data, response) {
        if (error) {
            console.log("Error : " + error)
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