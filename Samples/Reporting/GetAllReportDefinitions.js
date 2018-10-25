'use strict'

var CybersourceRestApi = require('CyberSource');

/**
 * This is a sample code to call ReportDefinitionsApi,
 * retrive all report definitions
 */
function getAllReportDefinitions() {

    var apiClient = new CybersourceRestApi.ApiClient();
    var instance = new CybersourceRestApi.ReportDefinitionsApi(apiClient);
    
    var request = "";

    instance.deleteSubscription(request, function (error, data, response) {
        if (error) {
            console.log("Error : " + error);
            console.log("Error : " + error.stack);
            console.log("Error status code : " + error.statusCode);
        }
        else if (data) {
            console.log("Data : " + JSON.stringify(data));
        }
        console.log("Response : " + JSON.stringify(response));
        console.log("Response id : " + response[text.id]);

    });

};
if (require.main === module) {
    getAllReportDefinitions(function () {
        console.log('Method call complete.');
    });
}
module.exports.getAllReportDefinitions = getAllReportDefinitions;