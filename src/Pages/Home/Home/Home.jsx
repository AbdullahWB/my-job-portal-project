import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import Banner from '../../Shared/Banner/Banner';
import { Outlet } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;