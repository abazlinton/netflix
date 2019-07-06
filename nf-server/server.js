const WebSocket = require('ws');

const clients = []
const wss = new WebSocket.Server({ port: 5000 });

wss.on('connection', addToClients)

function addToClients(client) {
  client.send(JSON.stringify({name: {}}))
  client.on('message', echoToClients)
  clients.push(client)
}

function echoToClients(message) {
  clients.forEach(client => client.send(message))
}