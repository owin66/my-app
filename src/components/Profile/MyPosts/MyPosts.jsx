import React from 'react';
import c from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (<div>
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
                <button>Remove</button>
            </div>
        </div>
        <div className={c.posts}>
            <Post message ='Hi, how are you?' likes = '15 likes'/>
            <Post message ="It's my first post" likes = '20 likes' />
        </div>
    </div>
    )
};

export default MyPosts;