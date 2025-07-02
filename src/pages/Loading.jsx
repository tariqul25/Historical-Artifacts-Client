import React from 'react';
import spinnnerLottie from '../assets/lotties/spinner.json'
import Lottie from 'lottie-react';


const Loading = () => {
    return (
     <div className="h-screen flex flex-col items-center justify-center">
  <p className="mb-5 text-lg text-gray-700">History Loading, please wait...</p>
  <Lottie 
    style={{ width: '200px' }} 
    animationData={spinnnerLottie} 
    loop={true} 
  />
</div>

    );
};

export default Loading;