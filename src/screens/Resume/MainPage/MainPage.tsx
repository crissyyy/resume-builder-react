import React from 'react';
import Header from './Header/Header';
import Profile from "./Profile/Profile";
import Experience from "./Experiences/Experience";

const MainPage: React.FC = () => {
    return (
        <div className="Main">
            <Header/>
            <Profile/>
            <Experience/>
        </div>
    );
};

export default MainPage;
