import React from 'react';
import c from './Navigation.module.css'



const Navigation = () => {
    return (
        <nav className={c.nav}>
        <div className={c.item}>
          <a href='/profile'>Profile</a>
        </div>
        <div className={c.item}>
          <a href='dialogs'>Messages</a>
        </div>
        <div className={c.item}>
          <a href='/news'>News</a>
        </div>
        <div className={c.item}>
          <a href ='/music'>Music</a>
          <div className={c.item}>
            <a href ='/settings'>Settings</a>
          </div>
        </div>
      </nav>
    )
}

export default Navigation