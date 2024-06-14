import React, { useState, useEffect } from 'react';
import Disconnection from './Disconnection';

function NetworkStatus({ onReconnect, children }) {
    const [isOnline, setIsOnline] = useState(window.navigator.onLine);

    useEffect(() => {
        const handleOnline = () => {
            setIsOnline(true);
            onReconnect();  // Trigger the reconnection handler
        };
        const handleOffline = () => setIsOnline(false);
  
        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);
  
        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        };
    }, [onReconnect]);
  
    if (!isOnline) {
        return <Disconnection />;
    } 
    
    return children;
}

export default NetworkStatus;
