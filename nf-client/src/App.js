// eslint-disable-next-line no-unused-vars
import React , {useEffect, useState} from 'react';
import './App.css';

function App() {
    
    useEffect(() => {
      const socket = new WebSocket('ws://localhost:5000');
      socket.addEventListener('open', function (event) {
          socket.send(JSON.stringify({
            name: "alex", 
            type: "SIGNAL_ACK_OPEN", 
            content: {}
          }));
      });

      socket.addEventListener('message', function (event) {
          console.log('Message from server ', event.data);
      });
    }, [])

    return null

}

export default App;
