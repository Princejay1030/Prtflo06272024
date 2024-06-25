import React, { useState } from 'react';

function ImageLoading({src, alt}) {
    const [isLoading, setIsLoading] = useState(true);

    const handleImageLoad = () => {
      setIsLoading(false);
    };
  
    return (
      <div style={{ 
        width: '100%', 
        height: '100%', 
        backgroundColor: isLoading ? 'gray' : 'transparent', 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <img 
          src={src} 
          alt={alt} 
          onLoad={handleImageLoad} 
          style={{ 
            display: isLoading ? 'none' : 'block'
          }} 
        />
        {isLoading && <span>Loading...</span>}
      </div>
    );
}

export default ImageLoading
