import React from 'react';
import c from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItems = (props) => {
    let path = '/dialogs/' + props.id;
    return (
            <div className={c.dialog + ' ' + c.active}>
                <NavLink to={path}>{props.name}</NavLink>
            </div>

    )
}

const Message = (props) =>{
    return (
        <div className={c.dialogs}>{props.message}</div>
    )
}

const Dialogs = (props) => {
    return (<div>
        <div className={c.dialogs}>
            <div className={c.dialogsItems}>
                <DialogItems name ='Dimich' id='1' />
                <DialogItems name ='Andrey' id='2' />
                <DialogItems name ='Sasha' id='3' />
                <DialogItems name ='Sveta' id='4' />
                <DialogItems name ='Victor' id='5' />
                <DialogItems name ='Valera' id='6' />
            </div>
            <div className={c.messages}>
                <Message message='Hi' />
                <Message message='How are you?' />
                <Message message='yo' />
                <Message message='yo' />
                <Message message='yo' />
            </div>
            </div>
        </div>
    )
}
export default Dialogs;