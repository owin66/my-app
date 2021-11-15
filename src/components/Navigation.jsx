import React from 'react';

const Navigation = () => {
    return (
        <div className="nav">
        <div>
          <a href='#s'>Profile</a>
        </div>
        <div>
          <a href='#s'>Messages</a>
        </div>
        <div>
          <a href='#s'>News</a>
        </div>
        <div>
          <a href='#s'>Music</a>
          <div>
            <a href='#s'>Settings</a>
          </div>
        </div>
      </div>
    )
}

export default Navigation