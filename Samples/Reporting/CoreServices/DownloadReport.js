'use strict'

var CybersourceRestApi = require('CyberSource');

/**
 * This is a sample code to call ReportDownloadsApi,
 * download  report 
 */
function downloadReport() {

    var apiClient = new CybersourceRestApi.ApiClient();
    var instance = new CybersourceRestApi.ReportDownloadsApi(apiClient);

    var request = "";

    instance.downloadReport(request, function (error, data, response) {
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
    downloadReport(function () {
        console.log('Method call complete.');
    });
}
module.exports.downloadReport = downloadReport;