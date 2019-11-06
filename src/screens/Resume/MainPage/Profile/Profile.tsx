import React from 'react';
import './Profile.css';
import Name from "./Name/Name";

const Profile: React.FC = () => {
    return (
        <div className="Profile Section">
            <Name/>
            <div className="ProfileSubtitle"> Profile</div>
            <div className="SubtitleContent">????????</div>
        </div>
    );
};

export default Profile;