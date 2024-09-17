import React, { useEffect } from 'react';

const WebSocketComponent = () => {
    useEffect(() => {
        // For development
        const ws = new WebSocket('ws://localhost:1000/ws');
        
        // For production
        // const ws = new WebSocket('wss://your-production-url/ws');

        ws.onopen = () => {
            console.log('WebSocket connection established');
        };

        ws.onmessage = (message) => {
            console.log('Received message:', message.data);
            // Handle the received message
        };

        ws.onclose = () => {
            console.log('WebSocket connection closed');
        };

        ws.onerror = (error) => {
            console.error('WebSocket error:', error);
        };

        // Cleanup function
        return () => {
            ws.close();
        };
    }, []); // Empty dependency array to run once

    return (
        <div>
            <h1>WebSocket Connection</h1>
            {/* Your component code here */}
        </div>
    );
};

export default WebSocketComponent;
