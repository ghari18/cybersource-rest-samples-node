'use strict'

var CybersourceRestApi = require('CyberSource');

/**
 * This is a sample code to call UserManagementApi,
 * retrive transaction by organization id
 */
function retrieveUserInfoByOrgId(callback) {

    var apiClient = new CybersourceRestApi.ApiClient();
    var instance = new CybersourceRestApi.UserManagementApi(apiClient);

    var opts = [];
    opts['organizationId'] = "wfpgcustj";

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
    retrieveUserInfoByOrgId(function () {
        console.log('Retriueve user info by Organization id end');
    });
}
module.exports.retrieveUserInfoByOrgId = retrieveUserInfoByOrgId;