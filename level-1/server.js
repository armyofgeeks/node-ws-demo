const WebSocket = require('ws')

const wss = new WebSocket.Server({ port: 9391 })


wss.on('error', (e) => {
  console.log('Websocket threw and error.', e.message)
})

wss.on('connection', function connection(client, req) {
  client.id = req.headers.id
  console.log('Client connected: ' + client.id)
  client.on('message', function incoming(message) {
    msg = JSON.parse(message)
  })
  client.on('close', function close() {

  })
  client.on('error', (e) => {
    console.log('Client threw and error.', e.message)
  })
})
