import React, { useState } from 'react';
import Test from './Test';

function Test2() {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);
    const products = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig', 'Grape'];

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
    <>
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

        <div>
            <Test color={color} setColor={setColor}></Test>
        </div>
    </>
  )
}

export default Test2
