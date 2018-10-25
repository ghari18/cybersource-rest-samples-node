'use strict'

var CybersourceRestApi = require('CyberSource');

/**
 * This is a sample code to call ReportsApi,
 * retrive report by report ID
 */
function getReportBasedOnReportid() {

    var apiClient = new CybersourceRestApi.ApiClient();
    var instance = new CybersourceRestApi.ReportsApi(apiClient);

    var request = "";

    instance.getReportByReportId(request, function (error, data, response) {
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
    getReportBasedOnReportid(function () {
        console.log('Method call complete.');
    });
}
module.exports.getReportBasedOnReportid = getReportBasedOnReportid;