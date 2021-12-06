import React from 'react';
import "./App.css";
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";
import state, {addPost, updateNewPostText} from "./redux/state";


const App = (props) => {
    return (
        <div className='wrapper'>
            <Header/>
            <Navigation/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route path='/dialogs' element={<Dialogs
                        dialogs={props.dialogs}
                        messages={props.messages}/>}/>
                    <Route path='/profile' element={<Profile
                        addPost={addPost}
                        newPostText={state.profilePage.newPostText}
                        posts={state.profilePage.posts}
                        updateNewPostText={updateNewPostText}/>}/>
                    <Route path='/news' element={<Profile/>}/>
                    <Route path='/music' element={<Profile/>}/>
                    <Route path='/settings' element={<Profile/>}/>
                </Routes>
            </div>
        </div>
    );
}


export default App;