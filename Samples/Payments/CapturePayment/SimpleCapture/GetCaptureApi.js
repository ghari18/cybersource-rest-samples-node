'use strict'

var CybersourceRestApi = require('CyberSource');

function sampleCode(){
    
    var apiClient = new CybersourceRestApi.ApiClient();
    var instance = new CybersourceRestApi.CaptureApi(apiClient);

 instance.getCapture("5289697403596987704107", function(error, data, response){
        if(error){
            console.log("Error : " + error)
        }
        else if(data){
            console.log("Data : " + JSON.stringify(data));
        }
        
            console.log("Response : " + JSON.stringify(response));
        
    });
    
};
if (require.main === module) {
    sampleCode(function () {
      console.log('getMethod call complete.');
    });
  }
  module.exports.sampleCode = sampleCode;