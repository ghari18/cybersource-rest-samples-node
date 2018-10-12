'use strict'

var CybersourceRestApi = require('CyberSource');
/**
 * This is a sample code to call RefundApi,
 * call refundCapture method
 */
function followOnCredit() {

    try {
        var apiClient = new CybersourceRestApi.ApiClient();
        var instance = new CybersourceRestApi.RefundApi(apiClient);

        var clientReferenceInformation = new CybersourceRestApi.V2paymentsClientReferenceInformation();
        clientReferenceInformation.code = "TC12345";

        var buyerInformation = new CybersourceRestApi.V2paymentsBuyerInformation();
        buyerInformation.merchantCustomerID = "123456abcd";

        var subMerchant = new CybersourceRestApi.V2paymentsAggregatorInformationSubMerchant();
        subMerchant.name = "Visa Inc";
        subMerchant.address1 = "900 Metro Center";
        subMerchant.locality = "Foster City";
        subMerchant.administrativeArea = "CA";
        subMerchant.region = "PEN";
        subMerchant.postalCode = "94404-2775";
        subMerchant.country = "US";
        subMerchant.email = "test@cybs.com";
        subMerchant.phoneNumber = "650-432-0000";

        var aggregatorInformation = new CybersourceRestApi.V2paymentsAggregatorInformation();
        aggregatorInformation.subMerchant = subMerchant;
        aggregatorInformation.name = "V-Internatio";
        aggregatorInformation.aggregatorID = "123456789";

        var orderInformation = new CybersourceRestApi.V2paymentsOrderInformation();

        var amountDetails = new CybersourceRestApi.V2paymentsOrderInformationAmountDetails();
        amountDetails.totalAmount = "100";
        amountDetails.currency = "usd";
        amountDetails.exchangeRate = "0.5";
        amountDetails.exchangeRateTimeStamp = "2.01304E+13";

        orderInformation.amountDetails = amountDetails;

        var billTo = new CybersourceRestApi.V2paymentsOrderInformationBillTo();
        billTo.firstName = "John";
        billTo.lastName = "Test";
        billTo.company = "Visa";
        billTo.address1 = "testcredit";
        billTo.address2 = "test2credit";
        billTo.locality = "Ann Arbor";
        billTo.administrativeArea = "MI";
        billTo.postalCode = "48104-2201";
        billTo.country = "US";
        billTo.email = "test2@cybs.com";
        billTo.phoneNumber = "9999999";

        orderInformation.billTo = billTo;

        var invoiceDetails = new CybersourceRestApi.V2paymentsOrderInformationInvoiceDetails();
        invoiceDetails.purchaseOrderNumber = "CREDIT US";
        invoiceDetails.purchaseOrderDate = "20111231";

        orderInformation.invoiceDetails = invoiceDetails;

        var shippingDetails = new CybersourceRestApi.V2paymentsOrderInformationShippingDetails();
        shippingDetails.shipFromPostalCode = "47404";

        orderInformation.shippingDetails = shippingDetails;

        var merchantInformation = new CybersourceRestApi.V2paymentsidcapturesMerchantInformation();
        merchantInformation.categoryCode = "1234";

        var request = new CybersourceRestApi.RefundCaptureRequest();
        request.clientReferenceInformation = clientReferenceInformation;
        request.buyerInformation = buyerInformation;
        request.aggregatorInformation = aggregatorInformation;
        request.orderInformation = orderInformation;
        request.merchantInformation = merchantInformation;

        var id = "5336232827876732903529";

        instance.refundCapture(request, id, function (error, data, response) {
            if (error) {
                console.log("Error : " + error);
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
    followOnCredit(function () {
        console.log('getMethod call complete.');
    });
}
module.exports.followOnCredit = followOnCredit;