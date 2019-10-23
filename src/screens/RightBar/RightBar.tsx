import React from 'react';
import Education from "./Education/Education";
import Skill from "./Skill/Skill";

const RightBar: React.FC = () => {
    return (
        <div className="RightBar">
            <Education/>
            <Skill/>
        </div>
    );
}

export default RightBar;
