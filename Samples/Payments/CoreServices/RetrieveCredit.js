'use strict'

var CybersourceRestApi = require('CyberSource');

/**
 * This is a sample code to call CreditApi,
 * retrieve a credit details by id.
 */
function retriveACredit() {

    try {
        var apiClient = new CybersourceRestApi.ApiClient();
        var instance = new CybersourceRestApi.CreditApi(apiClient);
        var id = "5332036920866055004101";
        
        instance.getCredit(id, function (error, data, response) {
            if (error) {
                console.log("Error : " + error)
            }
            else if (data) {
                console.log("Data : " + JSON.stringify(data));
            }

            console.log("Response : " + JSON.stringify(response));

        });
    } catch (error) {
        console.log(error);
    }
};
if (require.main === module) {
    retriveACredit(function () {
        console.log('Method call complete.');
    });
}
module.exports.retriveACredit = retriveACredit;