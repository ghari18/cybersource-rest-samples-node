'use strict'

var CybersourceRestApi = require('CyberSource');

/**
    * Retrieve an Authorization Reversal
    * Include the authorization reversal ID in the GET request to retrieve the authorization reversal details. 
    */
function getReversal() {

    var apiClient = new CybersourceRestApi.ApiClient();
    var instance = new CybersourceRestApi.ReversalApi(apiClient);
    var id = "5335485520876949203528";
    
    instance.getAuthReversal(id, function (error, data, response) {
        if (error) {
            console.log("Error : " + error.stack);
            console.log("Error status code : " + error.statusCode);
        }
        else if (data) {
            console.log("Data : " + JSON.stringify(data));
        }

        console.log("Response : " + JSON.stringify(response));

    });

};
if (require.main === module) {
    getReversal(function () {
        console.log('getMethod call complete.');
    });
}
module.exports.getReversal = getReversal;