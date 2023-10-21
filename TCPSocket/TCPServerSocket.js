const net = require("net");

const server = new net.createServer((socket)=>{
    console.log('Client connected');

    socket.on('data', (data) => {
      console.log(`Received data from client: ${data}`);
      
      // Send a response to the client
      socket.write('Hello from TCPServer!');
    });
  
    socket.on('end', () => {
      console.log('Client disconnected');
    });
  
    socket.on('error', (err) => {
      console.error(`Socket error: ${err.message}`);
    });
});


const PORT = 3000;
const HOST_IP_ADDRESS = "127.0.0.1";

server.listen(PORT, HOST_IP_ADDRESS);
