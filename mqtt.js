var mqtt = require('mqtt')
var client  = mqtt.connect('mqtt://io.adafruit.com/metwoop/feeds/raspberrypitemp1')
 
client.on('connect', function () {
  client.subscribe('presence')
  client.publish('presence', '11')
})
 
client.on('message', function (topic, message) {
  // message is Buffer
  console.log(message.toString())
  client.end()
})

