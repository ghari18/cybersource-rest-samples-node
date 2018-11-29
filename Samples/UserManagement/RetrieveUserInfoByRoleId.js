'use strict'

var CybersourceRestApi = require('CyberSource');

/**
 * This is a sample code to call UserManagementApi,
 * retrive transaction by role id
 */
function getUserManagementRoleId(callback) {

    var apiClient = new CybersourceRestApi.ApiClient();
    var instance = new CybersourceRestApi.UserManagementApi(apiClient);

    var opts = [];
    opts['roleId'] = "wfpgcustj";

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
    getUserManagementPermissionId(function () {
        console.log('Retrieve user info by role id end.');
    });
}
module.exports.getUserManagementRoleId = getUserManagementRoleId;