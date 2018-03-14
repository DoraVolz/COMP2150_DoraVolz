var soap = require('soap')

// Use WSDL link supplied by the service
var url = 'http://www.webservicex.net/ConvertTemperature.asmx?WSDL'

// Use the service documentation to know what arguments to supply
var args = {Temperature: 27, FromUnit: 'degreeCelsius', ToUnit: 'degreeFahrenheit'}

soap.createClient(url, (err, client) => {
    client.ConvertTemp(args, (error, result) => {
        // Check for errors
        if(error) {
            console.error(error)
        } else {
            console.log("The temperature after conversion is " + result.ConvertTempResult + " F")
        }
    })
})