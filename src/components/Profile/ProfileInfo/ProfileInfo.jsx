import React from 'react';
import c from './ProfileInfo.module.css'


const ProfileInfo = () => {
    return (
        <div>
            <img alt='logo main'
                 src='https://sun9-21.userapi.com/impg/aGCKfh1kMNqPwZXqT7WgCieHdUu_sume3GBn6Q/Of5KfPftfss.jpg?size=1500x500&quality=96&sign=dd0b3c8b12e826a98225e72ac634ed22&type=album'></img>
            <div className={c.discriptionBlock}>
                ava + description
            </div>
        </div>)
}
export default ProfileInfo