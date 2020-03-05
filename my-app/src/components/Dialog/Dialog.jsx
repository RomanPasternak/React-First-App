import React from 'react';
import s from './Dialog.module.css';
import DialogList from './DialogList/DialogList';
import Massage from './Massage/Massage';


const Dialog = (props) => {

    let dialogElement = props.dialogPage.dataDialogList.map((elem) => <DialogList name={elem.name} id={elem.id}/>);
    let massageElement = props.dialogPage.massageData.map((elem) => <Massage massage={elem.massage}/>);

    let newMassageElement = React.createRef();

    let onMassageChange = () => {
        let text = newMassageElement.current.value;
        props.onMassageUpdateChange(text);
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                {dialogElement}

            </div>
            <div className={s.massages}>
                {massageElement}
                <div className={s.massageAreaContainer}>
                    <textarea placeholder='Enter your massage' className={s.textArea} onChange={onMassageChange}
                              value={props.dialogPage.newMassage}
                              ref={newMassageElement}/>
                    <button className={s.btnAddMassage} onClick={props.addMassage}>Send</button>
                </div>
            </div>
        </div>
    );
}

export default Dialog;