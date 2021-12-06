import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import c from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import state, {updateNewPostText} from "../../redux/state";


const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts posts = {state.profilePage.posts}
                     addPost={props.addPost}
                     newPostText={props.newPostText}
                     updateNewPostText={updateNewPostText}/>
        </div>
    )
}
export default Profile