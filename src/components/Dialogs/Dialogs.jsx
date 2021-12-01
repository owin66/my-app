import React from 'react';
import c from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import DialogItems from "./DialogItem/DialogsItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let dialogsElements = props.dialogs.map(d => <DialogItems name={d.name} id={d.id}/>);
    let messagesElements = props.messages.map(m => <Message message={m.message}/>);

    let sendMessage = React.createRef();
    let addMessage =()=>{
        let text=sendMessage.current.value;
        alert(text)
    };

    return (
        <div>
            <div className={c.dialogs}>
                <div className={c.dialogsItems}>
                    {dialogsElements}

                </div>
                <div className={c.messages}>
                    {messagesElements}
                    <textarea ref={sendMessage} />
                    <div>
                     <button onClick={addMessage}>Send message</button>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Dialogs;