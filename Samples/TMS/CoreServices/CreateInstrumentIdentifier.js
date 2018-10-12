'use strict'

var CybersourceRestApi = require('CyberSource');

/**
 * This is a sample code to call TMS InstrumentIdentifierApi,
 * instrumentidentifiersPost method will create a new InstrumentIdentifier
 */

function createInstrumentIdentifier() {
    try {
        var apiClient = new CybersourceRestApi.ApiClient();
        var instance = new CybersourceRestApi.InstrumentIdentifierApi(apiClient);

        var card = new CybersourceRestApi.PaymentinstrumentsCard();
        card.number = "1234567890987654";


        var merchantInitiatedTransaction = new CybersourceRestApi.InstrumentidentifiersProcessingInformationAuthorizationOptionsInitiatorMerchantInitiatedTransaction();
        var previousTransactionId = "123456789012345";
        merchantInitiatedTransaction.previousTransactionId = previousTransactionId;

        var initiator = new CybersourceRestApi.InstrumentidentifiersProcessingInformationAuthorizationOptionsInitiator();
        initiator.merchantInitiatedTransaction = merchantInitiatedTransaction;

        var authorizationOptions = new CybersourceRestApi.InstrumentidentifiersProcessingInformationAuthorizationOptions();
        authorizationOptions.initiator = initiator;

        var processingInformation = new CybersourceRestApi.PaymentinstrumentsProcessingInformation();
        processingInformation.authorizationOptions = authorizationOptions;

        var body = new CybersourceRestApi.Body();
        body.card = card;
        body.processingInformation = processingInformation;

        var options = {
            "body": body
        };

        var profileId = "93B32398-AD51-4CC2-A682-EA3E93614EB1";

        instance.instrumentidentifiersPost(profileId, options, function (error, data, response) {
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
    createInstrumentIdentifier();
}
module.exports.createInstrumentIdentifier = createInstrumentIdentifier;