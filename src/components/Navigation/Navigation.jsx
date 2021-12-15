import React from 'react';
import c from './Navigation.module.css'
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";


const Navigation = () => {
    return (
        <nav className={c.nav}>
            <div className={c.item}>
                <NavLink to='/profile' className={navData => navData.isActive ? c.active : c.item}>Profile</NavLink>
            </div>
            <div className={c.item}>
                <NavLink to='dialogs'>Messages</NavLink>
            </div>
            <div className={c.item}>
                <NavLink to='/news'>News</NavLink>
            </div>
            <div className={c.item}>
                <NavLink to='/music'>Music</NavLink>
                <div className={c.item}>
                    <NavLink to='/settings'>Settings</NavLink>
                </div>
                <div className={c.item}>
                    <NavLink to='/friends'><Friends /></NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Navigation