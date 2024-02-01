import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import TopWork from '../TopWork/TopWork';
import AllCards from '../AllCards/AllCards';
import Footer from '../../Shared/Footer/Footer';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <TopWork/>
            <AllCards/>
            <Footer/>
        </div>
    );
};

export default Home;