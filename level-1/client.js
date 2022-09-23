const WebSocket = require('ws')

const user = { name: 'bob.smith', key: 'a2Cgh56Ghg761Dd' } 

server = new WebSocket('ws://localhost:9391', { headers: { id: user.name }})

server.on('open', () => {
  console.log('Connected to Server')
  server.send(JSON.stringify(bot))
})

server.on('close', (c) => {
  console.log('The server closed the connection. ', c.reason)
})

server.on('error', (e) => {
  console.log('The following error occured: ', e.message)
})

server.on('disconnect', (d) => {
  
})

server.on('message', (message) => {
  msg = JSON.parse(message)
  if (msg.type == 'authenticate') {
      
  }
})
