import React from 'react';
import s from './DialogList.module.css';
import {NavLink} from 'react-router-dom';

const DialogList = (props) =>{
    return(
        <div className = {s.dialog}>
            <NavLink activeClassName = {s.activeDialog} to ={'/dialog/'+ props.id} className = {s.dialogLink}>
                <img alt='' className ={s.avaDialog}></img>
                <span className = {s.dialogNameStl}>{props.name}</span>
            </NavLink>
        </div>
    );
}

export default DialogList;