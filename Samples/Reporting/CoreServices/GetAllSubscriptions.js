'use strict'

var CybersourceRestApi = require('CyberSource');

/**
 * This is a sample code to call ReportSubscriptionsApi,
 * retrive  report subscription
 */
function getAllSubscriptions() {

    var apiClient = new CybersourceRestApi.ApiClient();
    var instance = new CybersourceRestApi.ReportSubscriptionsApi(apiClient);
    
    var request = "";

    instance.getSubscription(request, function (error, data, response) {
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
    getAllSubscriptions(function () {
        console.log('Method call complete.');
    });
}
module.exports.getAllSubscriptions = getAllSubscriptions;