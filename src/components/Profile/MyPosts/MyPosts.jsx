import React from 'react';
import c from './MyPosts.module.css';
import Post from './Post/Post';
import store, {updateNewPostText} from "../../../redux/state";

const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likes={p.likes}/>)

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch({type:'ADD-POST'});
    }
    let onPostChenge = () => {
        let text = newPostElement.current.value;
    let action = {type:'UPDATE-NEW-POST-TEXT', newText: text}
        props.dispatch(action);
    }
    return (<div>
            <div className={c.postsBlock}>
                <h3>My posts</h3>
                <div>
                    <div>
                        <textarea onChange={onPostChenge} ref={newPostElement}
                                  value={props.newPostText}/>
                    </div>
                    <div>
                        <button onClick={addPost}>Add post</button>
                        <button>Remove</button>
                    </div>
                </div>
            </div>
            <div className={c.posts}>
                {postsElements}
            </div>
        </div>
    )
};

export default MyPosts;