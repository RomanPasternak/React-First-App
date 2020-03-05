import React from 'react';
import {addMassageActionCreator, onMassageChangeActionCreator} from "../../redux/dialog-reducer";
import Dialog from "./Dialog";


const DialogContainer = (props) => {

    let addMassage = () => {
        props.store.dispatch(addMassageActionCreator());
    };
    let onMassageUpdateChange = (text) => {
        props.store.dispatch(onMassageChangeActionCreator(text));
    };

    return (
        <Dialog addMassage={addMassage} onMassageUpdateChange={onMassageUpdateChange}
                dialogPage={props.store.getState().dialogPage}/>
    );
};

export default DialogContainer;