import React from 'react';
import c from './Navigation.module.css'



const Navigation = () => {
    return (
        <nav className={c.nav}>
        <div className={c.item}>
          <a href='#s'>Profile</a>
        </div>
        <div className={c.item}>
          <a href='#s'>Messages</a>
        </div>
        <div className={c.item}>
          News
        </div>
        <div className={c.item}>
          <a href='#s'>Music</a>
          <div className={c.item}>
            <a href='#s'>Settings</a>
          </div>
        </div>
      </nav>
    )
}

export default Navigation