import React from 'react';
import c from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import DialogItems from "./DialogItem/DialogsItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let dialogsElements = props.dialogs.map(d => <DialogItems name={d.name} id={d.id}/>);
    let messagesElements = props.messages.map(m => <Message message={m.message}/>);


    return (
        <div>
            <div className={c.dialogs}>
                <div className={c.dialogsItems}>
                    {dialogsElements}

                </div>
                <div className={c.messages}>
                    {messagesElements}

                </div>
            </div>
        </div>
    )
}
export default Dialogs;