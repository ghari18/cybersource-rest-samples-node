'use strict'

var CybersourceRestApi = require('CyberSource');

/**
 * This is a sample code to call TransactionBatchApi,
 * Returns a list of transaction batches, based on the search criteria provided. 
 */
function getListOfBatchFiles(callback) {

    var apiClient = new CybersourceRestApi.ApiClient();
    var instance = new CybersourceRestApi.TransactionBatchesApi(apiClient);

    var startTime = new Date("2018-06-01T00:00:00.00Z");
    var endTime = new Date("2018-06-30T23:59:59.59Z");

    instance.ptsV1TransactionBatchesGet(startTime, endTime, function (error, data, response) {
        if (error) {
            console.log("\nError in retrieve list of batch file : " + error);
        }
        else if (data) {
            console.log("\nData of retrieve list of batch file : " + JSON.stringify(data));
        }
        console.log("\nResponse of retrieve list of batch file : " + JSON.stringify(response));
        console.log("\nResponse Code of retrieve list of batch file : " + JSON.stringify(response['status']));
        callback(error, data);
    });

};
if (require.main === module) {
    getListOfBatchFiles(function () {
        console.log('RetriveL List of Batch files end.');
    });
}
module.exports.getListOfBatchFiles = getListOfBatchFiles;