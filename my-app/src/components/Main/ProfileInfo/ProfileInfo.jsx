import React from 'react';
import s from'./ProfileInfo.module.css';

const ProfileInfo = () => {
    return(
        <div>
            <div className = {s.tloMain}>
                <img alt='' src='https://www.w3schools.com/w3css/img_lights.jpg'></img>
            </div>
            <div>
                Ava +  !!!!
            </div>
        </div>
    );
}

export default ProfileInfo;