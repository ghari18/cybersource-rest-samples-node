'use strict'

var CybersourceRestApi = require('CyberSource');

/**
 * This is a sample code to call SecureFileShareApi,
 * Download a file for the given file identifier
 */
function downloadFileWithFileIdentifier(callback) {

    var apiClient = new CybersourceRestApi.ApiClient();
    var instance = new CybersourceRestApi.SecureFileShareApi(apiClient);

    var opts = [];
    
    instance.getFile(fileId, opts, function (error, data, response) {
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
    downloadFileWithFileIdentifier(function () {
        console.log('Method call complete.');
    });
}
module.exports.downloadFileWithFileIdentifier = downloadFileWithFileIdentifier;