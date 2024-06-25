import React, { useState } from 'react';
import '../Test/Test.css';

function Test() {
    const [color, setColor] = useState('');

    const handleColor = (e) => {
        setColor(e.target.value);
    }

    return (
      <div>
        <div className="square" style={{ backgroundColor: color }}></div>
        <input type="text" value={color} onChange={handleColor} placeholder="Enter color" />
      </div>
    );
}

export default Test;
