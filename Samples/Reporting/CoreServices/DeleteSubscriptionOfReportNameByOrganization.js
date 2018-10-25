'use strict'

var CybersourceRestApi = require('CyberSource');

/**
 * This is a sample code to call ReportSubscriptionsApi,
 * delete subscription report
 */
function deleteSubscriptionReport() {

    var apiClient = new CybersourceRestApi.ApiClient();
    var instance = new CybersourceRestApi.ReportSubscriptionsApi(apiClient);
    
    var request = "";

    instance.deleteSubscription(request, function (error, data, response) {
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
    deleteSubscriptionReport(function () {
        console.log('Method call complete.');
    });
}
module.exports.deleteSubscriptionReport = deleteSubscriptionReport;