'use strict'

var CybersourceRestApi = require('CyberSource');
/**
 * This is a sample code to call RefundApi,
 * to retrieve a refund details by id
 */
function retrieveARefund() {

    try {
        var apiClient = new CybersourceRestApi.ApiClient();
        var instance = new CybersourceRestApi.RefundApi(apiClient);
        var id = "5335504389516958903526";

        instance.getRefund(id, function (error, data, response) {
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
    retrieveARefund(function () {
        console.log('Method call complete.');
    });
}
module.exports.retrieveARefund = retrieveARefund;