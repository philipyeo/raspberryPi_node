var mqtt = require('mqtt');
var my_topic_name = 'metwoop/feeds/raspberrypitemp1';

var client = mqtt.connect('mqtts://io.adafruit.com',{
	port: 8883,
	username: 'metwoop',
	password: '84c15f37a88740ef9033b7b386f02be1'
});

client.on('connect',() => {
	console.log('connected');
	client.subscribe(my_topic_name)
});

client.on('error', (error) => {
	console.log('mqtt client errored');
	console.log(error);
});

client.on('message', function(topic,message) {

	console.log(message.toString());
});
