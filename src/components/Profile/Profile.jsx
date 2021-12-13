import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import c from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import state, {updateNewPostText} from "../../redux/state";


const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts posts = {props.profilePage.posts}
                     newPostText={props.newPostText}
                     dispatch={props.dispatch}/>
        </div>
    )
}
export default Profile