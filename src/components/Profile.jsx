import React from 'react';
import c from './Profile.module.css'


const Profile = () => {
   return ( 
   <div className={c.content}>
    <img alt='logo main' src='https://pbs.twimg.com/profile_banners/2577526642/1487186854/1500x500'></img>
  <div>
    ava + description
  </div>
  <div>
    My posts
    <div>New post</div>
  </div>
  <div className = {c.posts}>
    <div className = {`${c.item} ${c.gold}`}>post1</div>
    <div className ={c.item}>post2</div>
    </div>
    </div>)
}
export default Profile