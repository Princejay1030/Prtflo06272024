import React, { useState } from 'react';
import '../Test/Test.css';

function Test() {
    const [color, setColor] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);
    const products = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig', 'Grape'];

    const handleColor = (e) => {
        setColor(e.target.value);
    }

    
    
    const handleSearch = (e) => {
        const query = e.target.value.toLowerCase();
        setSearchQuery(query);
        if (query) {
            const filtered = products.filter(product => product.toLowerCase().includes(query));
            setFilteredProducts(filtered);
        } else {
            setFilteredProducts([]);
        }
    }

    return (
        <div>
            <div className="square" style={{ backgroundColor: color }}></div>
            <input type="text" value={color} onChange={handleColor} placeholder="Enter color" />
            
            
            <div>
                <input 
                    type="text" 
                    value={searchQuery} 
                    onChange={handleSearch} 
                    placeholder="Search products" 
                />
                <ul>
                    {filteredProducts.map((product, index) => (
                        <li key={index}>{product}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Test;
