import React, { useEffect } from 'react';

const WebSocketComponent = () => {
    useEffect(() => {
        const ws = process.env.NODE_ENV === 'development'
            ? new WebSocket('ws://localhost:1000/ws')
            : new WebSocket('wss://tour-travel-service.onrender.com/ws');

        ws.onopen = () => {
            console.log('WebSocket connection established');
        };

        ws.onmessage = (message) => {
            console.log('Received message:', message.data);
        };

        ws.onclose = () => {
            console.log('WebSocket connection closed');
        };

        ws.onerror = (error) => {
            console.error('WebSocket error:', error);
        };

        // Cleanup WebSocket connection on component unmount
        return () => {
            ws.close();
        };
    }, []); // Empty dependency array to run once

    return (
        <div>
            <h1>WebSocket Connection</h1>
        </div>
    );
};

export default WebSocketComponent;
