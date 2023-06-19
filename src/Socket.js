import React, { useEffect, useState } from 'react';

const Socket = () => {
    const [ws, setWs] = useState(null);
    const [message, setMessage] = useState('');
    const [input,setInput] = useState('');
    

    useEffect(() => {
        // Create WebSocket connection
        const websocket = new WebSocket('wss://echo.websocket.events/');

        // Connection opened
        websocket.onopen = () => {
            console.log('WebSocket connection opened');
        };

        // Listen for messages
        websocket.onmessage = (event) => {
            setMessage(event.data);
            console.log(`Message from server: ${event.data}`);
        };

        // Connection closed
        websocket.onclose = () => {
            console.log('WebSocket connection closed');
        };

        // Connection error
        websocket.onerror = (error) => {
            console.log(`WebSocket error: ${error}`);
        };

        setWs(websocket);

        // Make sure to close the WebSocket connection when the component unmounts
        return () => {
            websocket.close();
        };
    }, []); // Run this effect only once, when the component mounts

    // Function to send a message
    const sendMessage = () => {
        if(ws) {
            ws.send(input);
        }
    };
    const handleInput = (e) => {
      setInput(e.target.value)
    }
    return (
        <div>
            <button onClick={sendMessage}>Send Message</button>
            <input type='text'onChange={handleInput} />
            <p>Last message from server: {message}</p>
        </div>
    );
};

export default Socket;
