import React from 'react';
import c from './Post.module.css';

const Post = (props) => {
    return(
        <div className ={c.item}>
            <img alt='ava' src ='https://forum.minecraft-galaxy.ru/img/avatars/13295'></img>
            {props.message}
            <div><span>{props.likes}</span></div>
            </div>
        )
};

export default Post;