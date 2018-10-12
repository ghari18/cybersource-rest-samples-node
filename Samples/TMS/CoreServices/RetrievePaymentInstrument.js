'use strict'

var CybersourceRestApi = require('CyberSource');

/**
 * This is a sample code to call TMS PaymentInstrumentApi,
 * paymentinstrumentsTokenIdGet method will retrive the token details
 */
function retrivePaymentIdentifiers() {
    try {
        var apiClient = new CybersourceRestApi.ApiClient();
        var instance = new CybersourceRestApi.PaymentInstrumentApi(apiClient);

        var profileId = "93B32398-AD51-4CC2-A682-EA3E93614EB1";
        var tokenId = "765F047C8326858DE05340588D0A0473";

        instance.paymentinstrumentsTokenIdGet(profileId, tokenId, function (error, data, response) {
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
    } catch (error) {
        console.log(error);
    }
};
if (require.main === module) {
    retrivePaymentIdentifiers(function () {
        console.log('Method call complete.');
    });
}
module.exports.retrivePaymentIdentifiers = retrivePaymentIdentifiers;