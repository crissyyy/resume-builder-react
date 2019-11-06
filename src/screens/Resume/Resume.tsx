import React, {useEffect, useState} from 'react';
import './Resume.css';
import MainPage from './MainPage/MainPage';
import RightBar from "./RightBar/RightBar";

const Resume: React.FC = () => {
    return (
        <div className="Container">
            {/*<Test/>*/}
            <MainPage />
            <RightBar />
        </div>
    );
};

// const Test: React.FC = () => {
//     const [i,setI] = useState(0);
//     const change = () => {
//         setInterval(()=>{
//             setI(8);
//         },5000)
//     };
//     useEffect(change,[]);
//     return (
//         <div>
//             {i}
//         </div>
//     )
// };
export default Resume;
