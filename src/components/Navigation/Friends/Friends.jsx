import React from 'react';
import c from './Friends.module.css'

let Friends = (props) =>{
    return(
        <div>
        <div className={c.nav}>
            <h3>Friends</h3>
            <span>Sasha</span>
            <span> Dima</span>
            <span> Leha</span>
        </div>

        </div>
    )
}
export default Friends;