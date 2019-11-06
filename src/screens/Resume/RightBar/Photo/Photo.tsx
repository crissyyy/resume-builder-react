import React from 'react';
import './Photo.css'

const Photo: React.FC = () => {
    return (
        <div className="Photo">
            <div className="photoPos">
                <img src={require('./IMG_8986.jpeg')} />
            </div>
        </div>
    );
}

export default Photo;
