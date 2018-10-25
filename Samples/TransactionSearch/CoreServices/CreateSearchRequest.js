'use strict'

var CybersourceRestApi = require('CyberSource');

/**
 * This is a sample code to call SearchTransactionsApi,
 * create a search request
 */
function createSearchRequest(callback) {

    var apiClient = new CybersourceRestApi.ApiClient();
    var instance = new CybersourceRestApi.SearchTransactionsApi(apiClient);

    var createSearchRequest = new CybersourceRestApi.CreateSearchRequest();
    createSearchRequest.save = "false";
    createSearchRequest.name = "TSS search";
    createSearchRequest.timezone = "America/Chicago";
    createSearchRequest.query = "clientReferenceInformation.code:12345";
    createSearchRequest.offset = 0;
    createSearchRequest.limit = 100;
    createSearchRequest.sort = "id:asc, submitTimeUtc:asc";

    instance.createSearch(createSearchRequest, function (error, data, response) {
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
    createSearchRequest(function () {
        console.log('Method call complete.');
    });
}
module.exports.createSearchRequest = createSearchRequest;