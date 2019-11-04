import React from 'react';
import Header from './Header/Header';
import Footer from "./Footer/Footer";
import Profile from "./Profile/Profile";
import Experience from "./Experiences/Experience";

const MainPage: React.FC = () => {
    return (
        <div className="Main">
            <Header/>
            <Profile/>
            <Experience/>
            <Footer/>
        </div>
    );
};

export default MainPage;
