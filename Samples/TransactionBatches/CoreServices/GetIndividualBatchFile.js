'use strict'

var CybersourceRestApi = require('CyberSource');

/**
 * This is a sample code to call TransactionBatchApi,
 * Returns a specific transaction batch, if it exists 
 */
function getIndividualBatchFile(callback) {

    var apiClient = new CybersourceRestApi.ApiClient();
    var instance = new CybersourceRestApi.TransactionBatchApi(apiClient);

    var id = "CYB00613";

    instance.ptsV1TransactionBatchesIdGet(id, function (error, data, response) {
        if (error) {
            console.log("\nError in retrieve batch file : " + error);
        }
        else if (data) {
            console.log("\nData of retrieve batch file : " + JSON.stringify(data));
        }
        console.log("\nResponse of retrieve batch file : " + JSON.stringify(response));
        console.log("\nResponse Code of retrieve batch file : " + JSON.stringify(response['status']));
        callback(error, data);
    });

};
if (require.main === module) {
    getIndividualBatchFile(function () {
        console.log('Retrieve batch file end.');
    });
}
module.exports.getIndividualBatchFile = getIndividualBatchFile;