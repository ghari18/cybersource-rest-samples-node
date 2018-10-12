'use strict'

var CybersourceRestApi = require('CyberSource');
/**
 * This is a sample code to call PaymentApi,
 * to retrieve a payment details by id
 */
function retrieveAPayment() {

    try {
        var apiClient = new CybersourceRestApi.ApiClient();
        var instance = new CybersourceRestApi.PaymentApi(apiClient);
        var id = "5336232827876732903529";

        instance.getPayment(id, function (error, data, response) {
            if (error) {
                console.log("Error : " + error.stack);
                console.log("Error status code : " + error.statusCode);
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
    retrieveAPayment(function () {
        console.log('Method call complete.');
    });
}
module.exports.retrieveAPayment = retrieveAPayment;