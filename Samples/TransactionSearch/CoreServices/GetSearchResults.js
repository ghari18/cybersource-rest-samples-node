'use strict'

var CybersourceRestApi = require('CyberSource');

/**
 * This is a sample code to call SearchTransactionsApi,
 * retrive transaction by id
 */
function getSearchResults(callback) {

    var apiClient = new CybersourceRestApi.ApiClient();
    var instance = new CybersourceRestApi.SearchTransactionsApi(apiClient);

    var id = "5403567549356176703006";

    instance.getSearch(id, function (error, data, response) {
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
    getSearchResults(function () {
        console.log('Method call complete.');
    });
}
module.exports.getSearchResults = getSearchResults;