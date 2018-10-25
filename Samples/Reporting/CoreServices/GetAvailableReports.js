'use strict'

var CybersourceRestApi = require('CyberSource');

/**
 * This is a sample code to call ReportsApi,
 * retrive  report subscription
 */
function RetrieveAvailableReports(callback) {

    var apiClient = new CybersourceRestApi.ApiClient();
    var instance = new CybersourceRestApi.ReportsApi(apiClient);
    
    var request = "";

    instance.getReportByReportId(request, function (error, data, response) {
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
    RetrieveAvailableReports(function () {
        console.log('Retrieve Available Reports end.');
    });
}
module.exports.RetrieveAvailableReports = RetrieveAvailableReports;