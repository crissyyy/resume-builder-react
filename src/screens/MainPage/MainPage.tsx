import React from 'react';
import Header from './Header/Header'
import Footer from "./Footer/Footer";

const MainPage: React.FC = () => {
    return (
        <div className="Main">
            <Header></Header>
            <Footer></Footer>
        </div>
    );
}

export default MainPage;
