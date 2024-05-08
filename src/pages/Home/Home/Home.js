import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import TopWork from '../TopWork/TopWork';
import AllCards from '../AllCards/AllCards';
import Footer from '../../Shared/Footer/Footer';
import Photographer from '../Photographer/Photographer';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <TopWork/>
            <AllCards/>
            <Photographer/>
            <Footer/>
        </div>
    );
};

export default Home;