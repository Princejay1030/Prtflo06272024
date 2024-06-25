import React, { useState, useEffect, useCallback, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ReactLenis } from 'lenis/react';

// Styles sheet
import './App.css';

// Components
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Loading from './Components/Loader/Loader';
import CursorAnimation from './Components/CursorAnimation/CursorAnimation';

// Pages
import NetStatus from '../src/pages/Disconnection/NetworkStatus';
import Home from '../src/pages/Home/Home';
// import CliQQ from '../src/pages/StudyCases/CliQQ';
// import Test from '../src/pages/Test/Test';

const LazyCliQQ = lazy(() => import('../src/pages/StudyCases/CliQQ'));

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [reloadKey, setReloadKey] = useState(0);

  useEffect(() => {
    // Fake loading duration to simulate fetching time
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 7180);
    return () => clearTimeout(timeout);
  }, [reloadKey]);

  const handleReconnect = useCallback(() => {
    setIsLoading(true);
    setReloadKey(prevKey => prevKey + 1);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Router>
      <NetStatus onReconnect={handleReconnect}>
        <div className="wrapper" id="wrapper">
          <ReactLenis root options={{ orientation: "both", easing: "easeInOutCubic" }}>

            <Suspense fallback={<Loading />}>
              <Navbar />
              <CursorAnimation />

                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/CliQQ" element={<LazyCliQQ />} />
                  {/* <Route path="/Test" element={<Test />} /> */}
                </Routes>

              <Footer />
            </Suspense>
          </ReactLenis>
        </div>
      </NetStatus>
    </Router>
  );
}

export default App;
