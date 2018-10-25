'use strict'

var CybersourceRestApi = require('CyberSource');

/**
 * This is a sample code to call UserManagementApi,
 * retrive transaction by username
 */
function getUserInformation(callback) {

    var apiClient = new CybersourceRestApi.ApiClient();
    var instance = new CybersourceRestApi.UserManagementApi(apiClient);

    var opts = [];
    opts['userName'] = "Jhon Deo";
    opts['organizationId'] = "testrest";

    instance.getUsers(opts, function (error, data, response) {
        if (error) {
            console.log("\nError in retrieve user information : " + error);
        }
        else if (data) {
            console.log("\nData of retrieve user information : " + JSON.stringify(data));
        }
        console.log("\nResponse of  retrieve user information  : " + JSON.stringify(response));
        console.log("\nResponse Code of retrieve user information : " + JSON.stringify(response['status']));
        callback(error, data);
    });

};
if (require.main === module) {
    getUserInformation(function () {
        console.log('Retrieve UserInformation end.');
    });
}
module.exports.getUserInformation = getUserInformation;