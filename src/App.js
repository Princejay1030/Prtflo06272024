import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Loading from './Components/Loader/Loader';
import NetStatus from '../src/pages/Disconnection/NetworkStatus';
import Home from '../src/pages/Home/Home';
import CursorAnimation from './Components/CursorAnimation/CursorAnimation';
import { ReactLenis } from 'lenis/react';

import './App.css';

function App() {
  const [isLoading, setisLoading] = useState(true);
  const [reloadKey, setReloadKey] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => { setisLoading(false); }, 7180);
    return () => clearTimeout(timeout);
  }, [reloadKey]);

  const handleReconnect = () => {
    setisLoading(true);
    setReloadKey(prevKey => prevKey + 1);
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Router>
      <NetStatus onReconnect={handleReconnect}>
        <div className="wrapper" id="wrapper">
          <ReactLenis 
            root
            options={{ 
            orientation: "vertical" }}
          >

            <Navbar />
            <CursorAnimation />

            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>

            <Footer />
          </ReactLenis>
        </div>
      </NetStatus>
    </Router>
  );
}

export default App;
