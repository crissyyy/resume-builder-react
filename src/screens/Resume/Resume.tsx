import React from 'react';
import './Resume.css';
import MainPage from './MainPage/MainPage';
import RightBar from "./RightBar/RightBar";

const Resume: React.FC = () => {
    return (
        <div className="Container">
            <MainPage />
            <RightBar />
        </div>
    );
}

export default Resume;