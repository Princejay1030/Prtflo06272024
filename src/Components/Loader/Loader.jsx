import React from 'react';
import Lottie from 'lottie-react';

// Styles sheet
import './Loader.css';

// Assets
import loadingTest from '../../assets/img/loading.json';

const Loading = () => {
    return (
        <>
            <div className="load-bg"></div>
            <div className='loading-container'>
                <Lottie 
                    animationData={loadingTest} 
                    loop={true} 
                    width={50}
                    height={50} 
                    duration={6000}
                    className='loading-lottie'
                />
                <p className="t-lg-bold">Loading</p>
            </div>
        </>
  );
};

export default Loading;
