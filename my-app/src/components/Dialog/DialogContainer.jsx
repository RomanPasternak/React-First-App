import React from 'react';
import {addMassageActionCreator, onMassageChangeActionCreator} from "../../redux/dialog-reducer";
import Dialog from "./Dialog";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogPage: state.dialogPage
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        addMassage: () => {
            dispatch(addMassageActionCreator())
        },
        onMassageUpdateChange: (text) => {
            dispatch(onMassageChangeActionCreator(text));
        }
    }
}

const DialogContainer = connect(mapStateToProps, mapDispatchToProps)(Dialog);

export default DialogContainer;