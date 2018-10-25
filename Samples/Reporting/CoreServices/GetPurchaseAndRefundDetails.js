'use strict'

var CybersourceRestApi = require('CyberSource');

/**
 * This is a sample code to call PurchaseAndRefundDetailsApi,
 * retrive purchase and refund details
 */
function getPurchaseAndRefundDetails() {

    var apiClient = new CybersourceRestApi.ApiClient();
    var instance = new CybersourceRestApi.PurchaseAndRefundDetailsApi(apiClient);

    var request = "";

    instance.getPurchaseAndRefundDetails(request, function (error, data, response) {
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
    getPurchaseAndRefundDetails(function () {
        console.log('Method call complete.');
    });
}
module.exports.getPurchaseAndRefundDetails = getPurchaseAndRefundDetails;