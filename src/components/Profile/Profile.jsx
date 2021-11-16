import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import c from './Profile.module.css'


const Profile = () => {
   return ( 
   <div className={c.content}>
    <img alt='logo main' src='https://pbs.twimg.com/profile_banners/2577526642/1487186854/1500x500'></img>
  <div>
    ava + description
  </div>
  <MyPosts />
    </div>)
}
export default Profile