import React, { useState, useEffect } from 'react';
import '../PageTransition/PageTransition.css';

function PageTransition() {
    const [isTransitioning, setTransitioning] = useState(true);
    const [showWhiteBg, setShowWhiteBg] = useState(true);

    useEffect(() => {
        document.body.style.overflow = 'hidden';
    
        const transitionTimeout = setTimeout(() => {
          setTransitioning(false);
          document.body.style.overflow = '';
          
          setTimeout(() => {
            setShowWhiteBg(false);
          }, 1600);
        }, 1600);
    
        return () => {
          clearTimeout(transitionTimeout);
          document.body.style.overflow = '';
        };
      }, []);

  return (
    <>
        {showWhiteBg && <div className={`white-bg ${isTransitioning ? 'showTran' : 'hideTran'}`} ></div>}
    </>
  )
}

export default PageTransition
