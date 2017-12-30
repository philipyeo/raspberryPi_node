var W1Temp = require('w1temp');

// get instance of temperature sensor
W1Temp.getSensor('28-000004953eba').then(function (sensor) {

  // print actual temperature
  var temp = sensor.getTemperature();
  console.log('Actual temp:', temp, '°C');

  // print actual temperature on changed
  sensor.on('change', function (temp) {
    console.log('Temp changed:', temp, '°C');
  });

});
