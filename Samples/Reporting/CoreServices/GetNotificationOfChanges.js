'use strict'

var CybersourceRestApi = require('CyberSource');

/**
 * This is a sample code to call NotificationOfChangesApi,
 * retrive  notification of report change
 */
function getNotificationOfChanges() {

    var apiClient = new CybersourceRestApi.ApiClient();
    var instance = new CybersourceRestApi.NotificationOfChangesApi(apiClient);
    
    var request = "";

    instance.getNotificationOfChangeReport(request, function (error, data, response) {
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
    getNotificationOfChanges(function () {
        console.log('Method call complete.');
    });
}
module.exports.getNotificationOfChanges = getNotificationOfChanges;