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

const Message = (props) => {
    return (
        <div className={c.dialogs}>{props.message}</div>
    )
}

const Dialogs = (props) => {
    let dialogsData = [
        {id: 1, name: 'Dimich'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sasha'},
        {id: 4, name: 'Sveta'},
        {id: 5, name: 'Victor'},
        {id: 6, name: 'Valera'}
    ];
    let messagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'yo'},
        {id: 4, message: 'yo'},
        {id: 5, message: 'yo'},
    ];
    return (
        <div>
            <div className={c.dialogs}>
                <div className={c.dialogsItems}>
                    <DialogItems name={dialogsData[0].name} id={dialogsData[0].id}/>
                    <DialogItems name={dialogsData[1].name} id={dialogsData[1].id}/>

                </div>
                <div className={c.messages}>
                    <Message message={messagesData[0].message}/>
                    <Message message={messagesData[1].message}/>
                </div>
            </div>
        </div>
    )
}
export default Dialogs;