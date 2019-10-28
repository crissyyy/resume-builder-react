import React from 'react';
import Education from "./Education/Education";
import Skill from "./Skill/Skill";
import Contact from "./Contact/Contact";
import Photo from "./Photo/Photo";

const RightBar: React.FC = () => {
    return (
        <div className="RightBar">
            <Photo/>
            <Education/>
            <Skill/>
            <Contact/>
        </div>
    );
}

export default RightBar;
