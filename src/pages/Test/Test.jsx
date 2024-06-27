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

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio deleniti, dolorem ipsa tempore maxime quisquam nam nemo perferendis illo cumque ratione reiciendis. Recusandae, maiores cum nemo aspernatur totam minus labore.</p>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio deleniti, dolorem ipsa tempore maxime quisquam nam nemo perferendis illo cumque ratione reiciendis. Recusandae, maiores cum nemo aspernatur totam minus labore.</p>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio deleniti, dolorem ipsa tempore maxime quisquam nam nemo perferendis illo cumque ratione reiciendis. Recusandae, maiores cum nemo aspernatur totam minus labore.</p>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio deleniti, dolorem ipsa tempore maxime quisquam nam nemo perferendis illo cumque ratione reiciendis. Recusandae, maiores cum nemo aspernatur totam minus labore.</p>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio deleniti, dolorem ipsa tempore maxime quisquam nam nemo perferendis illo cumque ratione reiciendis. Recusandae, maiores cum nemo aspernatur totam minus labore.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio deleniti, dolorem ipsa tempore maxime quisquam nam nemo perferendis illo cumque ratione reiciendis. Recusandae, maiores cum nemo aspernatur totam minus labore.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio deleniti, dolorem ipsa tempore maxime quisquam nam nemo perferendis illo cumque ratione reiciendis. Recusandae, maiores cum nemo aspernatur totam minus labore.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio deleniti, dolorem ipsa tempore maxime quisquam nam nemo perferendis illo cumque ratione reiciendis. Recusandae, maiores cum nemo aspernatur totam minus labore.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio deleniti, dolorem ipsa tempore maxime quisquam nam nemo perferendis illo cumque ratione reiciendis. Recusandae, maiores cum nemo aspernatur totam minus labore.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio deleniti, dolorem ipsa tempore maxime quisquam nam nemo perferendis illo cumque ratione reiciendis. Recusandae, maiores cum nemo aspernatur totam minus labore.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio deleniti, dolorem ipsa tempore maxime quisquam nam nemo perferendis illo cumque ratione reiciendis. Recusandae, maiores cum nemo aspernatur totam minus labore.</p>
      </div>
    );
}

export default Test;
