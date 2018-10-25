'use strict'

var CybersourceRestApi = require('CyberSource');

/**
 * This is a sample code to call ReportSubscriptionsApi,
 * retrive transaction by username
 */
function CreateSubscriptionReport() {

    var apiClient = new CybersourceRestApi.ApiClient();
    var instance = new CybersourceRestApi.ReportSubscriptionsApi(apiClient);
    
    var request = new CybersourceRestApi.RequestBody()
    request.report_definition_name = "TransactionRequestClass"
    request.report_fields = [
        "Request.RequestID",
        "Request.TransactionDate",
        "Request.MerchantID"
    ]
    request.report_mime_type = "application/xml"
    request.report_frequency = "DAILY"
    request.timezone = "America/Chicago"
    request.start_time = "0900"
    request.start_day = 1
    request.report_filters = {}
    request.report_preferences = ""
    request.selected_merchant_group_name = None
    request.organization_id = "uday_wf"
    // This variable is not there in request body
    request.selected_organization_id = None


    instance.createSubscription(request, function (error, data, response) {
        if (error) {
            console.log("Error : " + error);
            console.log("Error : " + error.stack);
            console.log("Error status code : " + error.statusCode);
        }
        else if (data) {
            console.log("Data : " + JSON.stringify(data));
        }
        console.log("Response : " + JSON.stringify(response));
        console.log("Response id : " + response[text.id]);

    });

};
if (require.main === module) {
    CreateSubscriptionReport(function () {
        console.log('Method call complete.');
    });
}
module.exports.CreateSubscriptionReport = CreateSubscriptionReport;