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
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    </div>
    )
};

export default MyPosts;