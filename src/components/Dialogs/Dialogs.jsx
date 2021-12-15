import React from 'react';
import c from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import DialogItems from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/state";


const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItems name={d.name} id={d.id}/>);
    let messagesElements = state.messages.map(m => <Message message={m.message}/>);
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }

    return (
        <div>
            <div className={c.dialogs}>
                <div className={c.dialogsItems}>
                    {dialogsElements}

                </div>
                <div className={c.messages}>
                    <div>{messagesElements}</div>
                    <div>
                        <div><textarea value={newMessageBody}
                                       onChange={onNewMessageChange}
                                       placeholder='Enter your message'></textarea></div>
                        <div>
                            <button onClick={onSendMessageClick}>Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Dialogs;