import React from 'react';
import Banner from '../Banner/Banner';
import MostLikedArtifacts from '../../pages/MostLikedArtifacts';
import Faq from '../../pages/Faq';
import ExploreCivilization from '../../pages/ExploreCivilization';
import About from '../../pages/About';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <MostLikedArtifacts />
            <About></About>
            <Faq></Faq>
            <ExploreCivilization></ExploreCivilization>
        </div>
    );
};

export default Home;