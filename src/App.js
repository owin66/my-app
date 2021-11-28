import React from 'react';
import "./App.css";
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import state from "./redux/state";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className='wrapper'>
                <Header/>
                <Navigation/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path='/dialogs' element={<Dialogs
                            dialogs={props.dialogs}
                            messages={props.messages}/>}/>
                        <Route path='/profile' element={<Profile
                            posts={state.profilePage.posts}/>}/>
                        <Route path='/news' element={<Profile/>}/>
                        <Route path='/music' element={<Profile/>}/>
                        <Route path='/settings' element={<Profile/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;