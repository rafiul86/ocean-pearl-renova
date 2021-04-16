import React from 'react';
import Navbar from '../../../Shared/Navbar/Navbar';
import Services from '../../Services/Services';
import Header from '../Header/Header'
import Footer from '../../../Shared/Footer/Footer'
import Specialists from '../../Specialists/Specialists';
import Trends from '../../Trends/Trends';
import Connect from '../../Connect/Connect';
import CustomerReviews from '../../CustomerReviews/CustomerReviews';
const Home = () => {
    return (
        <div>
            <Navbar/>
            <Header/>
            <Services/>
            <CustomerReviews/>
            <Trends/>
            <Connect/>
            <Footer/>
        </div>
    );
};

export default Home;