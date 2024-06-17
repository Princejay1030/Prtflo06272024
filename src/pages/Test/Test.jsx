import React, { useState, useEffect } from 'react';
import '../Test/Test.css';

function Test() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('https://jsonplaceholder.typicode.com/posts');
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const result = await response.json();
          setData(result);
        } catch (error) {
          setError(error.message);
        }
      };
  
      fetchData();
    }, []);



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

            <h1>Fetched Data</h1>
      {error && <p>Error: {error}</p>}
      {data ? (
        <ul>
          {data.map(post => (
            <li key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
        </div>
    );
}

export default Test;
