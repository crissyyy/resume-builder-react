import React from 'react';
import './Index.css';
import MainPage from './MainPage/MainPage';
import RightBar from "./RightBar/RightBar";

const Experience: React.FC = () => {
    return (
        <div className="Container">
            <MainPage />
            <RightBar />
        </div>
    );
}

export default Experience;