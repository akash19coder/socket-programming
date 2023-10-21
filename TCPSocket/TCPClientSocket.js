const net = require('net');

const port = '3000';
const hostIPAddress = '127.0.0.1';

const clientSocket = new net.Socket();

clientSocket.connect(port,hostIPAddress, ()=>{
    console.log(`Connected to ${hostIPAddress}:${port}`); 
    
    clientSocket.write('Hello  from TCPClient');
});

// Handle data received from the server
clientSocket.on('data', (data) => {
    console.log(`Received data from server: ${data}`);
    // You can process the data received from the server here.
  });
  
  // Handle server disconnection
  clientSocket.on('close', () => {
    console.log('Connection closed');
  });
  
  // Handle errors
  clientSocket.on('error', (err) => {
    console.error(`Socket error: ${err.message}`);
  });




