'use strict'

var CybersourceRestApi = require('CyberSource');

/**
 * This is a sample code to call SearchTransactionsApi,
 * Get list of files and its information of them available inside the report directory
 */
function getListOfFiles(callback) {

    var apiClient = new CybersourceRestApi.ApiClient();
    var instance = new CybersourceRestApi.SecureFileShareApi(apiClient);

    var startDate = "2018-10-20";
    var endDate = "2018-10-24";
    var opts = [];
    opts['organizationId'] = "testrest";

    instance.getFileDetails(startDate, endDate, opts, function (error, data, response) {
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
    getListOfFiles(function () {
        console.log('Method call complete.');
    });
}
module.exports.getListOfFiles = getListOfFiles;