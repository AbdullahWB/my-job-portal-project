import React from 'react';
import Banner from '../../Shared/Banner/Banner';
import Category from '../Category/Category';
import Jobs from '../Jobs/Jobs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Jobs></Jobs>
        </div>
    );
};

export default Home;