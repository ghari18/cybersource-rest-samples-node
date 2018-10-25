'use strict'

var CybersourceRestApi = require('CyberSource');

/**
 * This is a sample code to call ReportDefinitionsApi,
 * retrive  report definition by name
 */
function getReportDefinition() {

    var apiClient = new CybersourceRestApi.ApiClient();
    var instance = new CybersourceRestApi.ReportDefinitionsApi(apiClient);

    var request = "";

    instance.getResourceInfoByReportDefinition(request, function (error, data, response) {
        if (error) {
            console.log("Error : " + error);
        }
        else if (data) {
            console.log("Data : " + JSON.stringify(data));
        }
        console.log("Response : " + JSON.stringify(response));
        console.log("Response id : " + response[text.id]);

    });

};
if (require.main === module) {
    getReportDefinition(function () {
        console.log('Method call complete.');
    });
}
module.exports.getReportDefinition = getReportDefinition;