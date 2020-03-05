import React from 'react';
import s from './Massage.module.css';

const Massage = (props) =>{
    return(
        <div className = {s.containerMassage}>
            <span className = {s.massage}>{props.massage}</span>
        </div>
    );
}

export default Massage;