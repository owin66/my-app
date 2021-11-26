import React from 'react';
import c from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    // let posts = [
    //     {id: 1, message: 'Hi, how are you?', likes:15},
    //     {id: 2, message: 'It\'s my first post', likes:20},
    //     {id: 2, message: 'Dada', likes:20},
    //     {id: 2, message: 'Blabla', likes:20},
    // ];
     let postsElements = props.posts.map(p=> <Post message={p.message} likes={p.likes}/>)

    return (<div>
            <div className={c.postsBlock}>
               <h3>My posts</h3>
                <div>
                    <div><textarea></textarea></div>
                    <div>
                        <button>Add post</button>
                        <button>Remove</button>
                    </div>
                </div>
            </div>
            <div className={c.posts}>
                {postsElements}
                {/*<Post message={posts[0].message} likes={posts[0].likes}/>
                <Post message={posts[1].message} likes={posts[1].likes}/>*/}
            </div>
        </div>
    )
};

export default MyPosts;