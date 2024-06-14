import React, { useState, useEffect } from 'react';
import AnimatedCursor from 'react-animated-cursor';
// import Cursor from '../../assets/img/Cursor.svg'

function CursorAnimation() {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 992);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 992);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {isLargeScreen && (
        <AnimatedCursor
          innerSize={0}
          outerSize={14}
          color='95, 131, 226'
          outerAlpha={.2}
          innerAlpha={.4}
          innerScale={4}
          outerScale={6}
          showSystemCursor={true}
          clickables={[
            'a',
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            'label[for]',
            'select',
            'textarea',
            'button',
            '.link'
          ]}
        />
      )}
    </>
  );
}

export default CursorAnimation;
