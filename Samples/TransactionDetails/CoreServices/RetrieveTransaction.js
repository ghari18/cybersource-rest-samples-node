'use strict'

var CybersourceRestApi = require('CyberSource');

/**
 * This is a sample code to call TransactionDetailsApi,
 * to retrive transaction details
 */
function retrieveTransaction(callback) {

    var apiClient = new CybersourceRestApi.ApiClient();
    var instance = new CybersourceRestApi.TransactionDetailsApi(apiClient);

    var id = "5330579740206278601009";

    instance.getTransaction(id, function (error, data, response) {
        if (error) {
            console.log("Error in Retrieve Transaction Details : " + error);
        }
        else if (data) {
            console.log("\n Retrieve Transaction Details Data : " + JSON.stringify(data));
        }
        console.log("\n Retrieve Transaction Details Response : " + JSON.stringify(response));
        console.log("\n Retrieve Transaction Details Response code : " + response[text.id]);

    });

};
if (require.main === module) {
    retrieveTransaction(function () {
        console.log('Retrieve Transaction Details end.');
    });
}
module.exports.retrieveTransaction = retrieveTransaction;