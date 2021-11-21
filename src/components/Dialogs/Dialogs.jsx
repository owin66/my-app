import React from 'react';
import c from './Dialogs.module.css';
import {NavLink} from "react-router-dom";


const Dialogs = (props) => {
    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItems}>
                <div className={c.dialog + ' ' + c.active}>
                    <NavLink to='/dialogs/1'>Dimich</NavLink>
                </div>
                <div className={c.dialog}>
                    <NavLink to='/dialogs/2'>Andrey</NavLink>
                </div>
                <div className={c.dialog}>
                    <NavLink to='/dialogs/3'>Sasha</NavLink>
                </div>
                <div className={c.dialog}>
                    <NavLink to='/dialogs/4'>Sveta</NavLink>
                </div>
                <div className={c.dialog}>
                    <NavLink to='/dialogs/5'>Victor</NavLink>
                </div>
                <div className={c.dialog}>
                    <NavLink to='/dialogs/6'>Valera</NavLink>
                </div>
            </div>
            <div className={c.messages}>
                <div className={c.message}>hi</div>
                <div className={c.message}>how are you?</div>
                <div className={c.message}>i am fine</div>
            </div>

        </div>
    )
}
export default Dialogs;