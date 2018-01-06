var mqtt = require('mqtt');
var my_topic_name = 'metwoop/feeds/raspberrypitemp1';

var W1Temp = require('w1temp');



var client = mqtt.connect('mqtts://io.adafruit.com',{
	port: 8883,
	username: '',
	password: ''
});

client.on('connect',() => {
	console.log('connected');
	//client.publish(my_topic_name,'5')
});

client.on('error', (error) => {
	console.log('mqtt client errored');
	console.log(error);
});

client.on('message', function(topic,message) {

	console.log(message.toString());
});


// get instance of temperature sensor
W1Temp.getSensor('28-000004953eba').then(function (sensor) {

  // print actual temperature
  var temp = sensor.getTemperature();
  console.log('Actual temp:', temp, '°C');
  client.publish(my_topic_name,temp.toString());

  // print actual temperature on changed
  //sensor.on('change', function (temp) {
  //  console.log('Temp changed:', temp, '°C');
  //  client.publish(my_topic_name,temp.toString());
 //});

});
