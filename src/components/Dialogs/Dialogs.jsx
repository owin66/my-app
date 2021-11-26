import React from 'react';
import c from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import DialogItems from "./DialogItem/DialogsItem";
import Message from "./Message/Message";


const Dialogs = (props) => {
    /*
        let dialogs = [
            {id: 1, name: 'Dimich'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Sasha'},
            {id: 4, name: 'Sveta'},
            {id: 5, name: 'Victor'},
            {id: 6, name: 'Valera'}
        ];
        let messages = [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'yo'},
            {id: 4, message: 'yo'},
            {id: 5, message: 'yo'},
        ];
    */

    let dialogsElements = props.dialogs.map(d => <DialogItems name={d.name} id={d.id}/>);
    let messagesElements = props.messages.map(m => <Message message={m.message}/>);

    /*[
    <DialogItems name={dialogs[0].name} id={dialogs[0].id}/>,
    <DialogItems name={dialogs[1].name} id={dialogs[1].id}/>,
    <DialogItems name={dialogs[2].name} id={dialogs[2].id}/>
];*/


    return (
        <div>
            <div className={c.dialogs}>
                <div className={c.dialogsItems}>
                    {dialogsElements}
                    {/*<DialogItems name={dialogs[0].name} id={dialogs[0].id}/>
                    <DialogItems name={dialogs[1].name} id={dialogs[1].id}/>
                    <DialogItems name={dialogs[2].name} id={dialogs[2].id}/>*/}

                </div>
                <div className={c.messages}>
                    {messagesElements}
                    {/*<Message message={messages[0].message}/>
                    <Message message={messages[1].message}/>*/}
                </div>
            </div>
        </div>
    )
}
export default Dialogs;