import React from 'react';
<<<<<<< HEAD
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

=======

const Loading = () => {
    return (
        <div>
            <p>loading....</p>
        </div>
>>>>>>> d7eada240e4ae6c88b3bec50bacef9b8c3ea074b
    );
};

export default Loading;