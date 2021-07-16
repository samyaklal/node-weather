const http = require('http');
const url = `http://api.openweathermap.org/data/2.5/weather?q=`+process.argv[2]+`&appid=2b421cd305b88e39d4182ac89b85e186`

http.get(url, function (response) {
    var body = "";
    //Read the data
    response.on('data', function (chunk) {
        body += chunk;
    });

    response.on('end', function () {
        if (response.statusCode === 200) {
            var weatherAPI = JSON.parse(body);
            console.log(weatherAPI);

        }
    });

  });